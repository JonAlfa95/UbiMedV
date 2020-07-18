import React, { Fragment } from 'react';

import medicamentos from '../medicamentos.json'

const Buscador = () => {

    function Buscar (e) {
        const formulario = document.querySelector('#formulario');
        const resultado = document.querySelector('#resultado')

        const filtro = () => {
            resultado.innerHTML = ''

            const busqueda = formulario.value.toLowerCase();

            for (let medicamento of medicamentos) {
                let nombre = medicamento.nombre.toLowerCase()

                if(nombre.indexOf(busqueda) !== -1){
                    resultado.innerHTML += `
                        <li>${medicamento.nombre}</li>
                    `
                }
            }

            if(resultado.innerHTML === '') {
                resultado.innerHTML += `
                        <li>Medicamento no encontrado</li>
                    `
            }

        }

        e.preventDefault('click', filtro)
        
    }

    return (
        <Fragment>
            <div className="container">
                <div className="card">
                    <form>
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="material-icons prefix">account_circle </i>
                                <input id="formulario" type="text" className="validate valign-center" />
                                <label for="icon_prefix">First Name</label>
                                <button className="btn waves-effect waves-light" id="buscador" onClick={Buscar}>Buscar
                                    <i class="material-icons right">send</i>
                                </button>
                                <ul id="resultado">

                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Buscador;