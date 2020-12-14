import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute = ({
        component,
        path,
        exact,
        redirect,
        auth
}) => {

    function credentialsValidation () {
        let result = false;
        const access_token = localStorage.getItem(auth);
        access_token ? result = true : result = false;
        return result;
    }

    const condition = credentialsValidation();

    return  condition ? (<Route  path={path}  exact={exact} component={component} />) : 
        (<Redirect  to={redirect}  />);
};
export  default  PrivateRoute;