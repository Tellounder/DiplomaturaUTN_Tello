const empleados = [
    {
        nombre: 'Flavia',
        trabajo: 'desarrollador'

    },
    {
        nombre: 'Leonardo',
        trabajo: 'abogado'

    },
    {
        nombre: 'Flavia',
        trabajo: 'desarrollador'

    },
    {
        nombre: 'Rodolfo',
        trabajo: 'desarrollador'

    },
    {
        nombre: 'Daniela',
        trabajo: 'analista'

    },
    {
        nombre: 'Lucas',
        trabajo: 'cocinero'

    }
]

//me muestre los desarroladores

//me muestre los no desarroladores

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)
console.log(desarrollador)


const nodesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)

console.log(nodesarrollador)