const mes = parseInt(prompt('ingrese el mes del año',''))

 if (mes == 1 || mes == 2 || mes == 3) {
    document.write('corresponde al primer trimestre de años')
} else if (mes == 4 || mes == 5 || mes == 6) {
    document.write('corresponde al segundo trimestre del año')
}
 else if (mes == 7 || mes == 8 || mes == 9) {
    document.write('corresponde al segundo tercero trimestre del año')
}