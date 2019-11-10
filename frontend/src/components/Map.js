import React, { Component } from 'react';

import L from 'leaflet';
import "leaflet/dist/leaflet.css";


export default class Map extends Component {
    
    componentDidMount(){
        this.map = L.map('map', {
            center: [13.4808197, -86.582077], 
            zoom: 17
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(this.map);

        const fIcon = L.icon({
            iconUrl: require('../img/pimp.svg'),
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });

        L.marker([12.435932399999999, -86.582077], {icon: fIcon}).bindPopup('Este es el centro de SOMOTO').addTo(this.map);
       
    }

    render(){
        return (
            <div className="container mapa" id="map"></div>
        )
    }

}