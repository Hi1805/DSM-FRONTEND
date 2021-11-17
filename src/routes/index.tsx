import React from "react";
import { Route, Router, Switch } from "react-router";
import { StudentScreen, TeacherScreen } from "screens";
import { SendEmailScreen } from "screens/SendEmailScreen";
import { LayoutManage } from "template/LayoutManage";
import { createBrowserHistory } from "history";

export const ManagementViews = () => {
  return (
    <React.Fragment>
      <Route
        path="/manage"
        render={({ match: { url } }) => (
          <LayoutManage>
            <Route path={`${url}/teacher`} component={TeacherScreen} exact />
            <Route path={`${url}/student`} component={StudentScreen} exact />
          </LayoutManage>
        )}
      />
    </React.Fragment>
  );
};
