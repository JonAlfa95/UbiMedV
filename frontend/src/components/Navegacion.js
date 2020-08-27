import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return ( 
        <Fragment>
            <nav className="navbar-fixed teal accent-3">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">UbiMed</Link>
                            <a href="/" className="sidenav-trigger" data-target="menuresponsive">
                            <i className="material-icons">menu</i>
                            </a>
                            
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/Medicamentos">Medicamentos</Link></li>
                            <li><Link to="/Users">Usuarios</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="menuresponsive">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Medicamentos">Aprende mas</Link></li>
                <li><Link to="/Users">Usuarios</Link></li>
            </ul>
        </Fragment>
     );
}
 
export default Navegacion;