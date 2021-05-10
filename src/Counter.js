import React from "react";
import { Input } from "reactstrap";
import { MyButton } from "./MyButton";

export default function Counter(props) {
  const [number, setNumber] = React.useState(props.init ?? 0);

  function change(evt) {
    if (+evt.target.value || +evt.target.value === 0) {
      setNumber(+evt.target.value);
    }
  }

  function increment(incr) {
    setNumber(number + incr);
  }

  return (
    <>
      <Input type="text" value={number} onChange={change} />
      <MyButton value={1} onClick={increment} />
      <MyButton value={-10} onClick={increment} />
      <MyButton value={100} onClick={increment} />
    </>
  );
}
