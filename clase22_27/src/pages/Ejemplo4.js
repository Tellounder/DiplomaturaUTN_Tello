import alumnos from '../data/alumnos.json'

const CargaJson = props => {
    return (<div>

        <h2>carga json</h2>
        {
            alumnos.map(alumno =>
                <li>{alumno.nombre} {alumno.apellido}({alumno.edad})</li>)
        }

        </div> )
}


export default CargaJson;