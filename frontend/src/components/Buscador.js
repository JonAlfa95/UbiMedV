import React, { Component } from 'react'



export default class Buscador extends Component {
    
    componentDidMount() {
        fetch('http://localhost:4000/users')
            .then(data => data.json())
            .then(data => console.log(data))
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-panel">
                        <div className="roe">
                            <form className="col s12"/>
                                    <div class="input-field col s6">
                                    <input id="Farmaco" type="text" className="validate"/>
                                    <label for="Farmaco">Ingrese el medicamento que desea encontrar</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

