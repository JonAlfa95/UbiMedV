import React, { Fragment } from 'react';

import '../css/Buscador2.css';

const Buscador2 = () => {
    return ( 
        <Fragment>
            <div className="card col s8 offset-s2 radius">
                <input type="text" name="" placeholder="Buscar"/>
                <i className="material-icons lupa">search</i>
            </div>
        </Fragment> 
     );
}
 
export default Buscador2;