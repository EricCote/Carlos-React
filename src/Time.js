import React from "react";

export default function Time() {
  const [time, setTime] = React.useState(new Date().toTimeString());

  window.setTimeout(() => {
    setTime(new Date().toTimeString());
  }, 1000);

  return <p>The time is: {time}</p>;
}

//UseState: State is a memory space held by react, for each component.
//it returns an array with some state (1)
//and some method to modify the state(2)
//[state, setState]
//setState() will set a new value and rerender the component  (and its children)
