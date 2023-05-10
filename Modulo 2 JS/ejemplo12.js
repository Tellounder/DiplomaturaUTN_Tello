let x = 1;
const cuantos = 5 ;
let suma = 0;


while(x <= cuantos){
    const valor = parseInt(prompt(`ingrese el valor ${x} de ${cuantos}`, ''));
    suma += valor;
    x++;
}

document.write(`la suma de los valores es ${suma}`);
