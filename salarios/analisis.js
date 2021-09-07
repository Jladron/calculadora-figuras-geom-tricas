//1.-Creamos un array solo con los salarios
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
//2.-Ordenamos el array
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//functiones helpers

function esPar(numero){
    return (numero % 2 === 0);
}

// Mediana General
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        return ((lista[mitad - 1] + lista[mitad]) / 2);
    }else{
        return lista[mitad];
    }
}

const medianaGeneralColombia =  medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90 )/ 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(parseInt(spliceStart), parseInt(spliceCount));

const medianaTop10Colombia = medianaSalarios(salariosColTop10);

// Comprobación


console.log(
    "Media General de colombia: $" + medianaGeneralColombia + "\nMedia del Top 10 de Colombia: $"+
    medianaTop10Colombia
);