import { Navbar } from "containers";
import React from "react";
import Popup from "reactjs-popup";
const ChangePasswordScreen = () => {
  return (
    <div>
      <Navbar title="Change Password" />
      <Popup modal nested closeOnDocumentClick>
        <form></form>
      </Popup>
    </div>
  );
};

export default ChangePasswordScreen;
