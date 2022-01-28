import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useHistory } from "react-router";

function AuthLayout({ component: Component, path, ...rest }) {
  const history = useHistory();
  const userToken = localStorage.get('userToken');
  
  if (!userToken) {
    history.push("/");
    localStorage.clear();
  }

  //Aqui vai a regra de validar token existente
  const isAuthenticatedUser = userToken === "123456";
  //END

  return (
    <Route
      path={path}
      render={(props) => {
        if (!isAuthenticatedUser) {
          return (
            <Redirect
              to={{ pathname: "/", state: { from: props.location.pathname } }}
            />
          );
        }

        return <Component {...props} />;
      }}
      {...rest}
    />
  );
}

export default AuthLayout;
