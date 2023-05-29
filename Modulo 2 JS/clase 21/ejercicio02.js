function MedioTransporte(distancia) {
    if (distancia <= 0) {
      return "No es una distancia correcta";
    } else if (distancia <= 1000) {
      return "Caminando";
    } else if (distancia <= 10000) {
      return "Bicicleta";
    } else if (distancia <= 30000) {
      return "Colectivpo";
    } else if (distancia <= 100000) {
      return "Automóvil";
    } else {
      return "Avión";
    }
  }
  
  // Ejemplo de uso
  const distancia = prompt("Ingresa la distancia en kilómetros:");
  const resultado = MedioTransporte(parseFloat(distancia));
  console.log("Medio de transporte  " + resultado);
  