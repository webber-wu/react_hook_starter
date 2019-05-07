import "normalize.css";
import "App.css";
// import { Fragment } from "react";
import { Route } from "react-router-dom";

import FBScript from "fbScript";
import GA from "gaScript";

import IndexUI from "indexUI";
import About from "about";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <FBScript />
        <GA />
        <div className="main">
          <Route exact path="/" component={IndexUI} />
          <Route exact path="/about" component={About} />
        </div>
      </Fragment>
    );
  }
}

export default App;
