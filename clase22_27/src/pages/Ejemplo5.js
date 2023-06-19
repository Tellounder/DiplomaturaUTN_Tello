import '../styles/ejemplo5.css'

import { useEffect, useState } from 'react';

const DatosApi = props => {
    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        //fetch > sirve para traer datos nativos de JS
        //otro modo de traerlo puedeser con la dependencia de axios (formulario)
        const cargaDatos = async () => {
            setCargando(true)
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);//obtengo personajes
            setCargando(false)// vuelvo a dejarlo en false (su estado inicial)

        }
        cargaDatos()
    }, []);


    return (
        <div>
            <h1>Carga api</h1>
            {cargando ? <p>Cargando..</p> : (
                <div className="personajes">
                    {personajes.map(personaje => (
                        <div className="personaje" key={personaje}>
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name} />

                                </div>
                                <div className="datos">
                                
                                    <h6>Especie {personaje.species === 'Human' ? 'Humano' :personaje.species}</h6>
                                    <h6>Vivo: {personaje.status === 'Alive' ? 'SI' :  personaje.status}</h6>
                                </div>1

                            </div>
                        </div>


                    ))}

                </div>
            )}
        </div>

    )
}




export default DatosApi;