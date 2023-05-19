const alumnos=[
    {
        nombre: 'Flavia',
        edad: 10
    },
    {
        nombre: 'Pablo',
        edad: 2
    },{
        nombre: 'Lucas',
        edad: 20
    },{
        nombre: 'Rodrigo',
        edad: 11
    },{
        nombre: 'Daniela',
        edad: 12
    }
]

//Solo va a mostrar los alumnos que la nota es >= 4
//imprimirlos > recorrer > for

const chicos = alumnos.filter(
    alumnos => alumnos.edad >=4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<li>Niño: ${chicos[i].nombre},cuya edad es ${chicos[i].edad}. </li> `)
}