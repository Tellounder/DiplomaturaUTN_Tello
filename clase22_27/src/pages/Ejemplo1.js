import { EjemploProps01, EjemploProps02, EjemploProps03, EjemploProps04, EjemploProps05 } from "../componentes/Props"

const name = 'Pablo'
const lista = ['manzana', 'bananas', 'peras', 'paltas']
const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>
            <h1>Ejemplos de propiedades</h1>
            <hr />

            {/* propiedad simple y reutilizable */}
            <EjemploProps01 nombre='flavia' />
            <EjemploProps01 nombre={name} />
            <hr />
            {/* listado de elempenos */}

            <EjemploProps02 elementos={lista} />
            <hr />
            {/* multiples propiedades */}
            <EjemploProps03 titulo='noticia X' subtitulo='aca estamos aprendiendo react' cuerpo='soy el cuerpo de la noticia' />
            <EjemploProps04 cambiarValor={mostrarValor} />
            <h3>Evento- tenemos con if que controla antes </h3>
            <EjemploProps05 eventoClick ={mostrarValor} />
            <EjemploProps05/>




        </div>
    )
}

export default Ejemplo1