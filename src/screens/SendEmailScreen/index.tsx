import { Navbar } from "containers";
import { SendEmail } from "containers";
import React from "react";
import { Container } from "template/Container";
export default function SendEmailScreen() {
  return (
    <React.Fragment>
      <Navbar title="Send Email" />
      <Container>
        <SendEmail />
      </Container>
    </React.Fragment>
  );
}
