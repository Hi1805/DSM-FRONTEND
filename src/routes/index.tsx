import { SendEmail } from "containers";
import React from "react";
import { Route } from "react-router";
// import { Redirect } from "react-router-dom";

const LayoutManage = React.lazy(() => import("template/LayoutManage"));
const TeacherScreen = React.lazy(() => import("screens/TeacherScreen"));
const StudentScreen = React.lazy(() => import("screens/StudentScreen"));
const SendEmailScreen = React.lazy(()=> import("screens/SendEmailScreen") );

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
              <Route path ={`${url}/email`} component={SendEmailScreen}/>
            </React.Suspense>
          </LayoutManage>
        )}
      />
      {/* <Redirect from="/manage" to={`/manage/teacher`} /> */}
    </React.Fragment>
  );
}
