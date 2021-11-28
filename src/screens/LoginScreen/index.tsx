import React from "react";
import { useForm } from "react-hook-form";
import { BodyLogin } from "types";
import { dsmApi } from "apis";
import { regexEmail } from "helpers";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }: BodyLogin) => {
    try {
      dsmApi.post({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
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
