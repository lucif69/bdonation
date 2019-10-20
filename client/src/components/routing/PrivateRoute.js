import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  ...rest
}) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    ></Route>
  );

const mapStateToProps = ({ auth: { isAuthenticated, loading } }) => ({
  isAuthenticated,
  loading
});

export default connect(mapStateToProps)(PrivateRoute);
