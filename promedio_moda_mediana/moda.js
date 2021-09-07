listado = [
    1,
    2,
    3,
    3,
    3,
    2,
    1,
    1,
    2,
    2,
];

const lista1Count = {};

listado.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
        
    }
);

function moda(listado){
    const lista1Count = {};

    listado.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
            
        }
    );

    const listadoFinal = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    ); 

    return listadoFinal[listadoFinal.length - 1];
}