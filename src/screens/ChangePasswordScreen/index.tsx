import { Navbar } from "containers";
import React from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import { Container } from "template/Container";
import PasswordStrengthBar from "react-password-strength-bar";
import Style from "./style";
const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const onSubmit = () => {};
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState("");
  return (
    <Style>
      <Navbar title="Change Password" />
      <Container>
        <Popup nested closeOnDocumentClick modal open={true}>
          <form className="form-change-password">
            <div className="title text-center p-4">
              <h3>Change Password</h3>
            </div>
            <div className="input-group">
              <div className="w-50 m-auto">
                <label>Current Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group mt-2">
              <div className="w-50 m-auto">
                <label>New Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <PasswordStrengthBar
                  minLength={8}
                  scoreWordClassName="score"
                  barColors={["red"]}
                  password={newPassword}
                  onChangeScore={(score) => {
                    console.log("feedback", score);
                  }}
                />
              </div>
            </div>
            <div className="input-group">
              <div className="w-50 m-auto">
                <label>Confirm Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="w-100 footer-form">
                <button className="btn btn-primary">Cancel</button>

                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </Popup>
      </Container>
    </Style>
  );
};

export default ChangePasswordScreen;
