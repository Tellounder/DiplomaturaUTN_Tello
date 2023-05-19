function getNameDiasForMes(mes){

    if(Number.isNaN(mes)) return false;

    if(mes <1 || mes > 12) return false; // meses van del 1 al 12. si coloco 23 esta mal

    mes--

    const data =[
        {
            nombre: 'Enero',
            dias: 31
        },
        {
            nombre: 'Febrero',
            dias: 28
        },
        {
            nombre: 'Marzo',
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 31
        },
        {
            nombre: 'Julio',
            dias: 30
        },
        {
            nombre: 'Agosto',
            dias: 31
        },
        {
            nombre: 'Septiempre',
            dias: 29
        },
        {
            nombre: 'Octubre',
            dias: 30
        },
        {
            nombre: 'Noviembre',
            dias: 29
        },
        {
            nombre: 'Diciembre',
            dias: 31
        },
    ]

    return data[mes]

}






function validarNumero(str) {
    const regex = /^(1[0-2]|[1-9])$/;
    return regex.test(str);
}


const numMes = prompt('Ingrse el mes de año', '');

let resultado = false;
if (validarNumero(numMes)) {
    resultado = getNameDiasForMes(numMes);
}

//console.log(numMes)

if(resultado){
    alert(`el mes ${resultado.nombre} tiene ${resultado.dias} dias. `)
}else{
    alert('Mes invalido');
}