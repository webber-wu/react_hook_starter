import App from "App";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";

let AppRouter =
  process.env.DEMO == "demo" ? (
    <HashRouter>
      <App />
    </HashRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

window.onload = () => {
  ReactDOM.render(
    <Fragment>{AppRouter}</Fragment>,
    document.getElementById("app")
  );
};
