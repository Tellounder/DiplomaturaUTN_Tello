
// Funcion de verificar la edad
function verificarEdad() {
    const edad = parseInt(prompt("Para operar en esta pagina debe ser mayor a 18 años:"));

    if(Number.isNaN(edad)){
        document.write('Debe ingresar un valor numerico')
    }else if(edad >= 18) {
            alert("sos mayor de 18 años");
          } else {
            alert("sos menor de 18 años");
          }
        }

//contador de caracteres
function contarCaracteres(textarea) {
    var texto = textarea.value;
    var contador = document.getElementById("contador");
    var caracteres = texto.length;
    contador.textContent = caracteres + (caracteres === 1 ? " caracter" : " caracteres");
  }
  


