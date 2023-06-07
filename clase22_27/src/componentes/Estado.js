
import { useState } from "react";
const EjemploEstado01 = props =>{

    const [activo, setActivo] = useState(true); //activo variable y seTactivo
    //funcion que lo notifica

    const toggleActivo = e => {
        setActivo(!activo)// negacion booleano => setea el activo al contrario de los que este activo
    }

    return(
        <div>

            <input type="text" placeholder="Cliclear boton" disabled={!activo}/>
            <button onClick={toggleActivo}>{activo ? 'Desactivar':'Activar'}</button>
        </div>    )
}

const EjemploEstado02 = props => {
    const [ counter, setCounter] = useState (0);

    return(
        <div className="container">
            <div className="counter">
                <h3>{`contador:  ${counter}`}</h3>
            </div>
            <div className="button">
                <button className="sucess" onClick={() => setCounter(counter +1)}> + </button>
                <button className="error" onClick={() => setCounter(counter -1)}> + </button>
            </div>
        </div>
    )
}

export {EjemploEstado01,
EjemploEstado02}