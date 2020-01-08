import "normalize.css";
import "App.css";
import "Layout.css";
import "Typograph.css";
import "Form.css";
import { Route } from "react-router-dom";

import FBScript from "fbScript";
import ReactGA from "reactGA";

import NotMatch from "404";
import IndexUI from "indexUI";
import About from "about";

class App extends React.Component {
  render() {
    return (
      <>
        <ReactGA />
        <FBScript />
        <div className="main">
          <Switch>
            <Route exact path="/" component={IndexUI} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotMatch} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
