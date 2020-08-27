import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import '../src/App.css';


import Navegacion from './components/Navegacion';
import Index from './components/Index';
import Medicamentos from './components/Medicamentos';
import Usuarios from './components/Users';

function App() {
  return (
    
    <>
    <Router>

      <Navegacion/>

      <Route path="/" exact component={Index} />
      <Route path="/Users" exact component={Usuarios} />
      <Route path="/Medicamentos" exact component={Medicamentos} />
      
    </Router>
    </>

  );
}

export default App;