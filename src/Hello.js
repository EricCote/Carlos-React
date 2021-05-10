import React from "react";
import { Input } from "reactstrap";
import Button from "./Button";

export default function Hello() {
  const [name, setName] = React.useState("");

  function change(evt) {
    setName(evt.target.value);
  }

  return (
    <>
      <Input type="text" value={name} onChange={change} />
      <Button lastName={name} />
    </>
  );
}
