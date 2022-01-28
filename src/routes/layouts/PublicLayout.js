import React from "react";
import { Route } from "react-router-dom";


function PublicLayout({ component: Component, path, ...rest }) {


  return (
    <Route
      path={path}
      render={(props) => {        
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
}

export default PublicLayout;
