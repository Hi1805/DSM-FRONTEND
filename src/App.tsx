import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginScreen } from './screens/LoginScreen';
import {
  LogoutScreen,

} from './screens';
import { isSafePath } from './helpers';
import { LayoutManagement } from './template/Layout/layoutManagement';

const history = createBrowserHistory();
function App() {
  React.useEffect(() => {
    if (!isSafePath(history.location.pathname)) {
      history.push('/manage');
    }

    console.log();
  }, []);

  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <React.Fragment>
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/logout' component={LogoutScreen} />
            <Route
              exact
              path='/manage'
              component={LayoutManagement}
            />
          </React.Fragment>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
