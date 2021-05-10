import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import "./custom.scss";
import { Container } from "reactstrap";

import Time2 from "./Time";
import Menu from "./Menu";
//import YouTube from "./YouTube";

let hello = <h1>Hello World</h1>;

export default function App() {
  return (
    <>
      <Menu />
      <Container>
        {hello}
        <Time2 />
        <Hello />
        <br />
        <Counter init={5} />
      </Container>
    </>
  );
}

//FirstLetter Uppercase in JSX: Component
//firstLetter lowercase in JSX: dom element

//Fragment is just rendering its chidren, without a div wrapping
