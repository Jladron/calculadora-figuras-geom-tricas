const listaPonderada = {
    "1" : 5,
    "2" : 3,
    "3" : 4,
    "4" : 5,
}


function mediaPonderada(listaPonderada){
    const listadoOrdenado = Object.entries(listaPonderada).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    let numerador = 0;
    let denominador = 0;

    for(let i = 0; i < listadoOrdenado.length; i++){
        numerador += listadoOrdenado[i][0] * listadoOrdenado[i][1];
        denominador += listadoOrdenado[i][1];
    }

    return numerador / denominador;
}
