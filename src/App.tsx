import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LoginScreen } from "./screens/LoginScreen";
import { isSafePath } from "./helpers";
import { ControlFormProvider, GlobalProvider } from "../src/services";
import { ToastContainer } from "react-toastify";
import { ManageScreen } from "./screens/MangeScreen";
const history = createBrowserHistory();

function App() {
  React.useEffect(() => {
    if (!isSafePath(history.location.pathname)) {
      history.push("/teacher");
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalProvider>
        <ToastContainer />
        <Router history={history}>
          <Switch>
            <React.Fragment>
              <ControlFormProvider>
                <Route path="/:type" component={ManageScreen} />
              </ControlFormProvider>
              <Route path="/login" component={LoginScreen} />
            </React.Fragment>
          </Switch>
        </Router>
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
