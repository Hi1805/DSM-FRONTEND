import React from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";

const LayoutManage = React.lazy(() => import("template/LayoutManage"));
export default function ManagementViews() {
  return (
    <React.Fragment>
      <Route
        path="/manage"
        render={({ match: { url } }) => (
          <LayoutManage>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Route
                path={`${url}/teacher`}
                component={React.lazy(() => import("screens/TeacherScreen"))}
                exact
              />
              <Route
                path={`${url}/student`}
                component={React.lazy(() => import("screens/StudentScreen"))}
                exact
              />
            </React.Suspense>
          </LayoutManage>
        )}
      />
      <Redirect from="/manage" to={`/manage/teacher`} />
    </React.Fragment>
  );
}
