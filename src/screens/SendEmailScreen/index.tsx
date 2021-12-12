import { Navbar } from "containers";
import { SendEmail } from "containers";
import React from "react";
import { Container } from "template/Container";
import LayoutManage from "template/LayoutManage";

export default function  SendEmailScreen (){
  
  return (
    
  <React.Fragment>
    <Navbar
      title="Send Email"
      />
    <Container>
      <SendEmail/>
    </Container>
  </React.Fragment>);
};
