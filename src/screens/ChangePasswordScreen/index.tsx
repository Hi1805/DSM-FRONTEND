import { Navbar } from "containers";
import React from "react";
import Popup from "reactjs-popup";
import { Container } from "template/Container";
import PasswordStrengthBar from "react-password-strength-bar";
import Style from "./style";
import { toast } from "react-toastify";
const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState("");
  const [scorePassword, setScorePassword] = React.useState(0);
  const [suggestions, setSuggestions] = React.useState<string[]>();
  const onSave = () => {
    if (confirmPassword !== newPassword) {
      toast.error("Your confirm password not match");
      return;
    }
    if (scorePassword <= 1) {
      toast.warning("Your New Password is week");
      return;
    }
  };

  return (
    <React.Fragment>
      <Navbar title="Change Password" />
      <Container>
        <Popup modal closeOnDocumentClick={false} open={true}>
          <Style className="form-change-password">
            <div className="title text-center">
              <h3>Change Password</h3>
            </div>
            <hr />
            <div className="input-group">
              <div className="w-80 m-auto">
                <label>Enter Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group mt-2">
              <div className="w-80 m-auto">
                <label>Enter New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <PasswordStrengthBar
                  minLength={8}
                  scoreWordClassName="score"
                  password={newPassword}
                  onChangeScore={(score, feedback) => {
                    let suggestion = [];
                    if (!score) {
                      suggestion.push(
                        "Password length must be greater than 8 character"
                      );
                    }
                    setSuggestions([
                      ...(feedback.suggestions || []),
                      ...suggestion,
                    ]);
                    setScorePassword(score);
                  }}
                />
                <div className="password-suggestion">
                  <strong>Suggestions:</strong>
                  {suggestions?.map((suggestion, index) => (
                    <div key={index}>{suggestion}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="input-group">
              <div className="w-80 m-auto">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="m-auto mt-5 footer-form d-flex justify-content-between">
              <button className="footer-form-btn footer-form-btn--cancel">
                Cancel
              </button>

              <button
                className="footer-form-btn footer-form-btn--save"
                onClick={(e) => {
                  e.preventDefault();
                  onSave();
                }}
              >
                Save
              </button>
            </div>
          </Style>
        </Popup>
      </Container>
    </React.Fragment>
  );
};

export default ChangePasswordScreen;
