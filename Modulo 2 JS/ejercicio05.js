const num1 = parseInt (prompt('ingrese su primer nuemero',''))
const num2 = parseInt (prompt('ingrese su segundo nuemero',''))
const num3 = parseInt (prompt('ingrese su tercer nuemero',''))

if(num1 > num2 && num1 > num3){
    console.log(`el numero mayor es el ${num1}`);
}else if(num2 > num3){
    console.log(`el numero mayor es el ${num2}`);
}else {
    console.log(`el numero mayor es el ${num3}`);
}
