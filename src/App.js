import React from "react";
import Counter from "./counter/Counter";
import "./custom.scss";
import { Container } from "reactstrap";
import Menu from "./Menu";
import Home from "./home/Home";
import About from "./about/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Covid from "./covid/Covid";
//import YouTube from "./YouTube";

// function Switch({ location }) {
//   switch (location) {
//     case "#home":
//       return <Home />;
//     case "#about":
//       return <About />;
//     case "#counter":
//       return <Counter init={7} />;
//     default:
//       return <Home />;
//   }
// }

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container className="mt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/covid" component={Covid} />
          <Route
            path="/counter/:init?"
            render={({ match }) => <Counter init={+match.params.init || 0} />}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

//FirstLetter Uppercase in JSX: Component
//firstLetter lowercase in JSX: dom element

//Fragment is just rendering its chidren, without a div wrapping
