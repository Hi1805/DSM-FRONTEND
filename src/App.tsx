import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginScreen } from './screens/LoginScreen';
import {
  LogoutScreen,

} from './screens';
import { isSafePath } from './helpers';
import { ControlFormProvider, GlobalProvider } from "../src/services"
import { ToastContainer } from 'react-toastify';
import { ManageScreen } from './screens/MangeScreen';
const history = createBrowserHistory();

function App() {
  React.useEffect(() => {
    // if (!isSafePath(history.location.pathname)) {
    //   history.push('/');
    // }
  }, []);

  return (
    <React.Fragment>
      <GlobalProvider>
        <ToastContainer />
        <Router history={history}>
          <Switch>
            <React.Fragment>
            <ControlFormProvider>
                <Route
                  exact
                  path='/:type'
                  component={ManageScreen}
                />
              </ControlFormProvider>
              <Route exact path='/login' component={LoginScreen} />
              <Route exact path='/logout' component={LogoutScreen} />
            </React.Fragment>
          </Switch>
        </Router>
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
