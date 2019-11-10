import React, { Component } from 'react';
import Map from './Map';

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1 className="center-align col s6">BIENVENIDO A UBIMED</h1>
                <Map />
            </div>
        )
    }
}
