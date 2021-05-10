import React from "react";
import { Button } from "reactstrap";

export default function Button1({ firstName, lastName }) {
  function popup() {
    alert(`Hi ${firstName} ${lastName} `);
  }

  return (
    <Button onClick={popup}>
      Hello {firstName} {lastName}
    </Button>
  );
}
