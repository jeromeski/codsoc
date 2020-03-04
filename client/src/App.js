import React from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { Container } from "react-bootstrap";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { setCurrentUser, logoutUser } from "./redux/auth/auth.actions";
import setAuthToken from "./utils/setAuthToken";
import store from "./redux/store";
import Dashboard from "./components/dashboard/Dashboard";
import { clearCurrentProfile } from "./redux/profile/profile.actions";
import PrivateRoute from "./components/common/PrivateRoute";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect login
    window.location.href = "./login";
  }
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Container>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard}>
          </PrivateRoute>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
