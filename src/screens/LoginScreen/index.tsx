import React from "react";
import { useForm } from "react-hook-form";
import { BodyLogin } from "types";
import { dsmApi } from "apis";
import { regexEmail } from "helpers";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = ({ email, password }: BodyLogin) => {
    try {
      toast.promise(
        dsmApi.login({
          email,
          password,
        }),
        {
          error: "Your email and password are incorrect",
          success: {
            render: ({ data }: { data: any }) => {
              if (data.token) {
                localStorage.setItem("us_tk", data.token);
                history.push("/manage/teacher");
              } else toast.warning("Some things went wrong");
              return "Welcome to comeback";
            },
          },
          pending: "Loading Login",
        }
      );
    } catch (error) {
      toast.error("Your network is not connected");
    }
  };
  return (
    <div id="login-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            type="text"
            {...register("email", {
              pattern: regexEmail,
              required: true,
            })}
            className="form-control"
          ></input>
          {errors.email && <span>Email is not valid</span>}
        </div>
        <div className="input-group">
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: true,
            })}
          >
            {errors.password && <span>Password is required</span>}
          </input>
        </div>
        <input type="submit" value="submit" className="btn btn-primary"></input>
      </form>
    </div>
  );
}
