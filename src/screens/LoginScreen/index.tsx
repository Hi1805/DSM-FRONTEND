import React from "react";
import { useForm } from "react-hook-form";
import { BodyLogin } from "types";
import { dsmApi } from "apis";
import { regexEmail } from "helpers";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import "./style.css";

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
    <div id="login-screen">
      <div className="container">
        <div className="login">
          <div className="login__group">
            <form className="form" id="form_login">
              <div className="login__group--logo">
                <svg
                  width={48}
                  height={50}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={16} cy={16} r={16} fill="#3751FF" />
                  <path
                    d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1={11}
                      y1={9}
                      x2={23}
                      y2={23}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.7" />
                      <stop offset={1} stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>School Data Management</p>
              <h2>Log In</h2>
              <label htmlFor="Email" className="login__group--label">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                className="login__group--input"
                placeholder="Email address"
                required
              />
              <label htmlFor="Password" className="login__group--label">
                Password
              </label>
              <input
                type="password"
                name="Password"
                id="password"
                className="login__group--input"
                placeholder="Password"
                required
              />
              <div className="login__group--icon" id="btnPassword">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="login__group--eye"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
                {/* <i class="fas fa-eye-slash login-group-icon-eye"></i> */}
              </div>
              <div id="forgot" className="login__group--forgot">
                <a href="#forgot_pw" style={{ textDecoration: "none" }}>
                  Forgot Password?
                </a>
              </div>
              <button className="login__group--button">Log In</button>
            </form>
          </div>
        </div>
        {/* Forgot Password */}
        <div id="forgot_pw">
          <form className="form" id="form-forgot" />
          <div className="forgot__group">
            <a href="#" id="closeModal" className="forgot__group--close">
              ×
            </a>
            <div className="forgot__group--logo">
              <svg
                width={48}
                height={50}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={16} cy={16} r={16} fill="#3751FF" />
                <path
                  d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
                  fill="#fff"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={11}
                    y1={9}
                    x2={23}
                    y2={23}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.7" />
                    <stop offset={1} stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p>School Data Management</p>
            <h2>Forgot Password</h2>
            <label htmlFor="email" className="forgot__group--label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="forgot__group--input"
              id="email"
              placeholder="Email address"
              required
            />
            <span id="text" />
            <input
              type="submit"
              defaultValue="Send"
              className="forgot__group--button"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
