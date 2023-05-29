const numeros = [10, 5, 7, 15, 3];

let mayor = 0;

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

for(let i = 0; i < numeros.length; i++){
    if(numeros[i]>mayor){
        mayor =numeros[i]
    }
}

console.log(`el mayor de estos numeros : ${numeros} es ${mayor}`)