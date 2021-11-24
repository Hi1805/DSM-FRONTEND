import React from "react";
import { LayoutManage } from "template/LayoutManage";
import {  Navbar } from "containers";

import { SendEmail } from "containers";

export const SendEmailScreen = () => {
  
  return (
    
  <LayoutManage>
    <Navbar
      title="Send Email"
      valueSearch=""
      handleSearch={()=>{}}/>
    <SendEmail/>
  </LayoutManage>);
};
