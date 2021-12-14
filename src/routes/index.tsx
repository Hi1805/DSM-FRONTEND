import React from "react";
import { Redirect, Route } from "react-router";

const LayoutManage = React.lazy(() => import("template/LayoutManage"));
const TeacherScreen = React.lazy(() => import("screens/TeacherScreen"));
const StudentScreen = React.lazy(() => import("screens/StudentScreen"));
const SendEmailScreen = React.lazy(() => import("screens/SendEmailScreen"));
const HistoryScreen = React.lazy(() => import("screens/HistoryScreen"));
const ChangePasswordScreen = React.lazy(
  () => import("screens/ChangePasswordScreen")
);
export default function ManagementViews() {
  return (
    <React.Fragment>
      <Route
        path="/manage"
        render={({ match: { url } }) => (
          <LayoutManage>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Route
                path={`${url}/change-password`}
                component={ChangePasswordScreen}
              />
              <Route path={`${url}/teacher`} component={TeacherScreen} />
              <Route path={`${url}/student`} component={StudentScreen} />
              <Route path={`${url}/email`} component={SendEmailScreen} />
              <Route path={`${url}/history`} component={HistoryScreen} />
              <Redirect from="manage" to={`${url}/teacher`} />
            </React.Suspense>
          </LayoutManage>
        )}
      />
      {/* <Redirect from="/manage" to={`/manage/teacher`} /> */}
    </React.Fragment>
  );
}
