import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Users = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [tipo, setTipo] = useState("")
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
    const [image, setImage] = useState("")

    const handleImageUpload = async () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "geopins")
        data.append("cloud_name", "dy5k6ucgh")
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dy5k6ucgh/image/upload",
            data
        )
        return res.data.url
    }

    const handleSubmit = async event => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            event.preventDefault()
            const url = await handleImageUpload();
            const user = {
                name,
                password,
                tipo,
                coordenadas: { lat, lon },
                image: url
            }
            console.log(user)
            
            await axios.post('http://localhost:4000/users', user, config)
            
        } catch (err) {
            console.log("Error creating pin", err)
        }
    }



    return ( 
        <Fragment>
            <div className="container">
                <div className="section">
                    <div className="card">
                        <div className="row">
                            <div className="input-field col s4 valign-wrapper">
                                <input type="text" id="nombre" className="autocomplete" onChange={e => setName(e.target.value)} />
                                <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="input-field col s4 valign-wrapper">
                                <input type="text" id="password" className="autocomplete" onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="contraseña">Contraseña</label>
                            </div>
                            <div className="input-field col s4 valign-wrapper">
                                <input type="text" id="tipo" className="autocomplete" onChange={e => setTipo(e.target.value)} />
                                <label htmlFor="tipo">Nivel del Usuario</label>
                            </div>
                            <h5 className="center-align">COORDENADAS</h5>
                            <div className="input-field col s3 offset-s3 valign-wrapper">
                                <input type="number" id="lat" className="autocomplete" onChange={e => setLat(e.target.value)} />
                                <label htmlFor="lat">Latitud</label>
                            </div>
                            <div className="input-field col s3 offset-3 valign-wrapper">
                                <input type="number" id="lan" className="autocomplete" onChange={e => setLon(e.target.value)} />
                                <label htmlFor="lan">Longitud</label>
                            </div>
                            
                            <div className="input-field col s10 offset-2 valign-wrapper">
                                <input type="file" id="image" accept="image/*" 
                                onChange={e => setImage(e.target.files[0])} />
                            </div>
                            <button type="submit" onClick={handleSubmit}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Users;