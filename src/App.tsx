import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginScreen } from './screens/LoginScreen';
import {
  LogoutScreen,

} from './screens';
import { isSafePath } from './helpers';
import { LayoutManagement } from './template/Layout/layoutManagement';
import { ControlFormProvider, GlobalProvider } from "../src/services"
import { ToastContainer } from 'react-toastify';
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
              <Route exact path='/login' component={LoginScreen} />
              <Route exact path='/logout' component={LogoutScreen} />
              <ControlFormProvider>
                <Route
                  path='/manage/:id'
                  component={LayoutManagement}
                />
              </ControlFormProvider>

            </React.Fragment>
          </Switch>
        </Router>
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
