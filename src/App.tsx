import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginScreen } from './screens/LoginScreen';
import {
  LogoutScreen,
  StudentManagementScreen,
  TeacherManageScreen as TeacherManagementScreen,
} from './screens';
import { isSafePath } from './helpers';

const history = createBrowserHistory();
function App() {
  React.useEffect(() => {
    if (!isSafePath(history.location.pathname)) {
      history.push('/manage/student');
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
              path='/manage/student'
              component={StudentManagementScreen}
            />
            <Route
              exact
              path='/manage/teacher'
              component={TeacherManagementScreen}
            />
          </React.Fragment>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
