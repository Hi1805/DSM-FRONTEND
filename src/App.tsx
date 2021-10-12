import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LoginScreen } from "./screens/LoginScreen";
import { isSafePath } from "helpers";
import { ToastContainer } from "react-toastify";
import { LayoutManage } from "./template/LayoutManage";
import { StudentScreen, TeacherScreen } from "screens";
const history = createBrowserHistory();

function App() {
  // React.useEffect(() => {
  //   if (!isSafePath(history.location.pathname)) {
  //     history.push("/manage");
  //   }
  // }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Router history={history}>
        <Switch>
          <React.Fragment>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/manage/teacher" component={TeacherScreen} />
            <Route exact path="/manage/student" component={StudentScreen} />
          </React.Fragment>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
