import React, { Component } from 'react';



import Titulo from './Titulo';

import Mapa from './Mapa';
import Buscador from './Buscador';
import Buscador2 from './Buscador2';

import '../css/Index.css';

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="espacio">
                            <Buscador2 />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="espacio">
                        <Mapa />
                    </div>
                </div>
            </div>
        )
    }
}
