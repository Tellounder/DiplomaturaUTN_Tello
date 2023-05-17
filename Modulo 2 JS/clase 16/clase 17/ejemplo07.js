const frutas = ['palta','manzana','bananas','frutillas'];

console.log(frutas)

console.log(frutas.sort())

const frutasOrdenadas = frutas.sort()

console.log(frutasOrdenadas)

const numeros = [78, 10, 7, 21, 1 ,5]

console.log(numeros.sort())

const num = numeros.sort(function(a,b){
    return a-b
})

console.log(num)

const num2 = numeros.sort(function (a, b) {
    return b - a
})
console.log(num2)

const nombres = ['flavia', 'Leonardo','Camila','Rodolfo','Daniela', 'Ramiro']
const nombresOrdenados = nombres.sort()
console.log(nombresOrdenados)

const nombresOrdenados2 = nombres.sort().reverse()

console.log(nombresOrdenados2)