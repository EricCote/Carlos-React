import React, { useEffect, useLayoutEffect, useState } from "react";
import { Input } from "reactstrap";
import { MyButton } from "./MyButton";

export default function Counter(props) {
  const [number, setNumber] = useState(props.init ?? 0);

  useLayoutEffect(() => {
    if (window.localStorage.getItem("count")) {
      setNumber(+window.localStorage.getItem("count"));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", number);
  }, [number]);

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
      <h1>Counter : {number}</h1>
      <Input className="mb-3" type="text" value={number} onChange={change} />
      <MyButton value={1} onClick={increment} />
      <MyButton value={-10} onClick={increment} />
      <MyButton value={100} onClick={increment} />
    </>
  );
}
