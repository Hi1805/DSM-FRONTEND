import React from "react";
import { useForm } from "react-hook-form";
import { BodyLogin } from "types";
import { dsmApi } from "apis";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import Style from "./style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [isDisplayPassword, setIsDisplayPassword] = React.useState(false);
  const [isForgotPasswordScreen, setIsForgotPassword] = React.useState(false);
  const toggleDisplayPassword = () => {
    setIsDisplayPassword(!isDisplayPassword);
  };
  const typePassword = isDisplayPassword ? "text" : "password";
  const history = useHistory();
  const onSubmit = ({ email, password }: BodyLogin) => {
    try {
      toast.promise(
        dsmApi.login({
          email,
          password,
        }),
        {
          error: {
            render: ({ data }: { data: any }) => {
              return data.message;
            },
          },
          success: {
            render: ({ data }: { data: any }) => {
              if (data.token) {
                localStorage.setItem("us_tk", data.token);
                history.push("/manage/teacher");
              } else toast.warning(data.message);
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
    <Style
      id="login-screen"
      className="d-flex justify-content-center"
      style={{ backgroundImage: "url(./images/background-login.png)" }}
    >
      <form className="mr-auto ml-auto mt-5">
        <div className="container">
          <div className="form-header">
            <div className="logo">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#3751FF" />
                <path
                  d="M16.5 14.5C16.5 13.9477 16.9477 13.5 17.5 13.5H23.9857C27.319 13.5 29.9 14.4143 31.7286 16.243C33.5762 18.0716 34.5 20.6475 34.5 23.9705C34.5 27.3132 33.5762 29.9087 31.7286 31.757C29.9 33.5857 27.319 34.5 23.9857 34.5H17.5C16.9477 34.5 16.5 34.0523 16.5 33.5V14.5Z"
                  fill="url(#paint0_linear_4999_2194)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4999_2194"
                    x1="16.5"
                    y1="13.5"
                    x2="34.5"
                    y2="34.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.7" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="title w-100">School Data Management</div>
          </div>

          <div className="form-body">
            <div className="form-body__title">
              {!isForgotPasswordScreen ? "Login" : "Forgot Password"}
            </div>
            <div className="form-body__input-group">
              <label htmlFor="email" className="w-100">
                Email
              </label>
              <input
                type="text"
                className="input__group"
                placeholder="Email or username ..."
              />
            </div>
            {isForgotPasswordScreen ? null : (
              <div className="form-body__input-group mt-4">
                <label htmlFor="email" className="w-100">
                  Password
                </label>

                <div className="d-flex input__group justify-content-center align-items-center">
                  <input type={typePassword} placeholder="Enter Password..." />
                  {isDisplayPassword ? (
                    <AiFillEye onClick={toggleDisplayPassword} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggleDisplayPassword} />
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="form-footer mt-4">
            <div
              className="w-100 d-flex justify-content-end"
              onClick={() => setIsForgotPassword(!isForgotPasswordScreen)}
              style={{
                cursor: "pointer",
              }}
            >
              {!isForgotPasswordScreen ? "Forgot Password" : "Go Back to Login"}
            </div>
            <div className="w-100 mt-3">
              <button className="btn w-100 btn-primary">
                {!isForgotPasswordScreen ? "Login" : "Send OTP"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </Style>
  );
}
