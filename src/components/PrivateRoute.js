import React from 'react'
import {Navigate} from 'react-router-dom';

// children i.e. <Dashboard/> is also passsed as props
const PrivateRoute = ({isLoggedIn, children}) => {
  if(isLoggedIn) {
    return children;
  }
  else {
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
