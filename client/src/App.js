import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import CreateProfile from "./components/create.profile/CreateProfile";
import EditProfile from "./components/edit.profile/EditProfile";
import AddExperience from "./components/add.credentials/AddExperience";
import AddEducation from "./components/add.credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profiles/Profile";
import NotFound from "./components/common/NotFound";
import Posts from "./components/posts/Posts";
import Post from "./components/Post/Post";

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
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Container>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:handle" component={Profile} />
          <Route exact path="/user/:_id" component={Profile} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />

          <PrivateRoute exact path="/edit-profile" component={EditProfile} />

          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />

          <PrivateRoute exact path="/add-education" component={AddEducation} />

          <PrivateRoute exact path="/feed" component={Posts} />

          <PrivateRoute exact path="/post/:id" component={Post} />
        </Switch>
        <Route render={() => <Redirect to="/not-found" />} />
        <Route exact path="/not-found" component={NotFound} />
      </Container>
    </div>
  );
};

export default App;
