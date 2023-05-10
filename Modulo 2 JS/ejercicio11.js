const frutas =['manzana','banana','palta', 'frutillas', 'naranja','limones','mandarinas']

console.log(frutas)
console.log(frutas.length)
console.log(frutas[2])

const ultimo = frutas [frutas.length-1 ]

console.log(ultimo)

const seleccionado = 2;

console.log(frutas[seleccionado]);

for( let i = 0; i<frutas.length ; i++){
    console.log('tenemos ' + frutas[i])
}

for( let i = 0; i<frutas.length ; i++){
    document.write(' tenemos ' + frutas[i] + "<br/>")
}

