function allParrafos(){

    const allParraf = document.getElementsByTagName('p')

    const num= allParraf.length;

    alert (`Hay ${num} elementos <p> en este documento`)
}

function caja1P(){ //nombre de funcion
    const caja1P = document.getElementById('caja1');

    const caja1parrafos = caja1P.getElementsByTagName('p');

    console.log(caja1parrafos);

    const num = caja1parrafos.length

    console.log(num)

    alert(`Hay ${num} elementos <p> en este documentp`)
    console.log(`Hay ${num} elementos <p> en este documento`)

}