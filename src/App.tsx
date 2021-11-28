import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "reactjs-popup/dist/index.css";
import { isSafePath } from "helpers";

const history = createBrowserHistory();

const LoginScreen = React.lazy(() => import("screens/LoginScreen"));
const ManagementViews = React.lazy(() => import("routes"));
function App() {
  React.useEffect(() => {
    if (!isSafePath(history.location.pathname)) {
      history.push("/login");
    }
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <React.Fragment>
              <Route exact path="/login" component={LoginScreen} />
              <ManagementViews />
            </React.Fragment>
          </Switch>
        </React.Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
