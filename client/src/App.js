import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { Container } from 'react-bootstrap';
import { Route } from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Route exact path='/' component={Landing} />
      <Container>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Container>
    </div>
  );
};

export default App;