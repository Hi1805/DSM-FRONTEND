import { dsmApi } from "apis";
import { setToken } from "helpers";
import React from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import StyleLogin from "screens/LoginScreen/style";
import { BodyLogin } from "types";
const LENGTH_OTP = 6;
export default function ForgotPasswordScreen() {
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const [otpState, setOtpState] = React.useState("");
  const [isOpenOtp, setIsOpenOtp] = React.useState(false);
  const refButton = React.useRef<HTMLButtonElement>(null);

  const onSubmit = async ({ email }: BodyLogin) => {
    interface Response {
      message: string;
      token: string;
    }
    if (refButton.current) {
      refButton.current.disabled = true;
    }
    try {
      await toast.promise(
        dsmApi.forgotPassword({
          email,
        }),
        {
          error: {
            render: ({ data }: { data: Response }) => {
              return data.message;
            },
          },
          success: {
            render: ({ data }: { data: Response }) => {
              setIsOpenOtp(true);
              setToken({
                key: "us_tk",
                value: data.token,
              });
              return "Please Checking Your email";
            },
          },
          pending: "Loading Checking Email",
        }
      );
      if (refButton.current) {
        refButton.current.disabled = false;
      }
    } catch (error) {
      if (refButton.current) {
        refButton.current.disabled = false;
      }
    }
  };
  React.useEffect(() => {
    (async () => {
      if (otpState.length === LENGTH_OTP) {
        try {
          await toast.promise(
            dsmApi.checkingOtp({
              otp: otpState,
            }),
            {
              error: "OTP is not correct",
              pending: "Loading Checking OTP",
              success: {
                render: () => {
                  history.push("/login");
                  return "We sent to you a new password in email, Please checking it";
                },
              },
            }
          );
        } catch (error) {
          console.log(error);
          setOtpState("");
        }
      }
    })();
  }, [otpState]);
  const renderOTP = () => {
    return (
      <div className="otp-form">
        <OtpInput
          value={otpState}
          className="otp-input"
          numInputs={LENGTH_OTP}
          onChange={(otp: string) => setOtpState(otp)}
          separator={<span>-</span>}
          isInputNum={true}
        />
      </div>
    );
  };
  const renderInputEmail = () => {
    return (
      <div className="form-body__input-group">
        <label htmlFor="email" className="w-100">
          Email
        </label>
        <input
          type="text"
          className="input__group"
          placeholder={isOpenOtp ? "Enter Email " : "Enter email or username"}
          {...register("email")}
        />
      </div>
    );
  };

  const renderFormCheckOTP = () => {
    return (
      <React.Fragment>
        <div className="form-body">
          <div className="form-body__title">Your OTP</div>
          {renderOTP()}
        </div>
        <div className="form-footer mt-4">
          <div className="w-100 d-flex mt-3">
            <button
              type="button"
              className="btn w-50 m-auto btn-primary"
              onClick={() => setIsOpenOtp(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderFormGetOTP = () => {
    return (
      <React.Fragment>
        <div className="form-body">
          <div className="form-body__title">Forgot Password</div>
          {renderInputEmail()}
        </div>
        <div className="form-footer mt-4">
          <div
            className="w-100 d-flex justify-content-end go-back"
            style={{
              cursor: "pointer",
            }}
            onClick={() => history.push("/login")}
          >
            Go To Login
          </div>
          <div className="w-100 d-flex mt-3">
            <button
              type="submit"
              className="btn w-100 m-auto btn-primary"
              ref={refButton}
            >
              Send to OTP
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };
  return (
    <StyleLogin
      id="login-screen"
      className="d-flex justify-content-center"
      style={{ backgroundImage: "url(./images/background-login.png)" }}
    >
      <form className="mr-auto ml-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
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
          {isOpenOtp ? renderFormCheckOTP() : renderFormGetOTP()}
        </div>
      </form>
    </StyleLogin>
  );
}
