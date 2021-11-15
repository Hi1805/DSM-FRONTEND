import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LoginScreen } from "./screens/LoginScreen";
import { isSafePath } from "helpers";
import { ToastContainer } from "react-toastify";
import { StudentScreen, TeacherScreen } from "screens";
import { SendEmailScreen } from "./screens/SendEmailScreen/index";
import "reactjs-popup/dist/index.css";

const history = createBrowserHistory();

function App() {
  React.useEffect(() => {
    if (!isSafePath(history.location.pathname)) {
      history.push("/manage/teacher");
    }
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Router history={history}>
        <Switch>
          <React.Fragment>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/manage/teacher" component={TeacherScreen} />
            <Route exact path="/manage/student" component={StudentScreen} />
            <Route exact path="/manage/email" component={SendEmailScreen} />
          </React.Fragment>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
