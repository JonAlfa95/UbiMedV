import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navegacion extends Component {
    render() {
        return (
            <div>
            <nav className="navbar-fixed teal lighten-1">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">UbiMed</Link>
                            <a href="/" className="sidenav-trigger" data-target="menuresponsive">
                            <i className="material-icons">menu</i>
                            </a>
                            
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/Medicamentos">Medicamentos</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="menuresponsive">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Medicamentos">Aprende mas</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </div>
        )
    }
}
