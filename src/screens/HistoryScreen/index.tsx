import { Navbar } from "containers";
import ListHistory from "containers/ListHistory";
import React from "react";
import { Container } from "template/Container";

export default function HistoryScreen() {
  return (
    <div className="history-screen">
      <Navbar title="History Login" />
      <Container>
        <ListHistory />
      </Container>
    </div>
  );
}
