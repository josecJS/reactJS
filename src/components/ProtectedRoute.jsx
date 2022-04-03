import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const state = useSelector(state => state);

    return (
        <Route
            {...rest}
            render={ props => {
                if(state.login || Component.name === 'Login') {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/' />;
                }
            }}
        />
    );
};
