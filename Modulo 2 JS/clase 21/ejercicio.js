const edad = parseInt(prompt("que edad tenes?"));

if (Number.isNaN (edad)) {
  document.write('debe ingresar un valor numerico');
} else if(edad >=18){
  document.write('podes conducir');
}
else {
  document.write(' no podes conducir')
}