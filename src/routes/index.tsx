import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./paths/auth";
import Public from "./paths/public";

import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout"
import NotFound from "../pages/NotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {
          Auth.map((route) => <AuthLayout key={route.path} {...route} />)
        }

        {
          Public.map((route) => <PublicLayout key={route.path} {...route} />)
        }

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;