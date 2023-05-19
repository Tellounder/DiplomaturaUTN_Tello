const datosUsuarios = [
    {
        nombre: 'Flavia',
        password: '1234'
    },
    {
        nombre: 'Laura',
        password: '1234'
    },
    {
        nombre: 'Leonardo',
        password: '1234'
    },
    {
        nombre: 'Romina',
        password: '1234'
    },
    {
        nombre: 'Rodolfo',
        password: '1234'
    }
]

const soloPasword = datosUsuarios.map(function(c){
    return c.password
})

console.log(soloPasword)