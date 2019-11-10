import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navegacion from './components/Navegacion';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Admin from './components/Admin';


function App() {
  return (
    <Router>
      <Navegacion/>
      
      <Route to="/" component={ Inicio } />
      <Route to="/Login" component={ Login } />
      <Route to="/Admin" component={ Admin } />

    </Router>
  );
}

export default App;
