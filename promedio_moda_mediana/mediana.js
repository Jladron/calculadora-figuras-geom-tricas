//calculo básico:

const lista =[
    100,
    200,
    500,
    4000000,
];



function esPar(Lista){
    if(lista.length % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function comparar(a, b){
    return b - a;
}



function mediana(listado){

    const lista = listado.sort(comparar);
    
    let mediana;
    const mitadLista = lista.length /2;

    if(esPar(lista)){
        mediana = lista[parseInt(mitadLista)];
    }else{
        mediana = (lista[parseInt(mitadLista)] + lista[parseInt(mitadLista) - 1]) / 2;
    }

    return mediana;
}