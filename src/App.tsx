import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "reactjs-popup/dist/index.css";
import { isSafePath } from "helpers";
import ForgotPasswordScreen from "screens/ForgotPasswordScreen";
import LoginScreen from "screens/LoginScreen";

const history = createBrowserHistory();

const ManagementViews = React.lazy(() => import("routes"));
function App() {
  React.useEffect(() => {
    if (!isSafePath(history.location.pathname)) {
      history.push("/manage/student");
    }
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Router history={history}>
        <Switch>
          <React.Fragment>
            <React.Suspense fallback={<div>Loading...</div>}>
              <ManagementViews />
            </React.Suspense>
            <Route exact path="/login" component={LoginScreen} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordScreen}
            />
          </React.Fragment>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
