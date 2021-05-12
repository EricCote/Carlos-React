import React from "react";
import { Button } from "reactstrap";

export function MyButton({ value, onClick }) {
  return (
    <Button
      color={value >= 0 ? "primary" : "danger"}
      className="ms-3"
      onClick={() => {
        onClick(value);
      }}
    >
      {value >= 0 ? "Increase " : "Decrease "} {Math.abs(value)}
    </Button>
  );
}
