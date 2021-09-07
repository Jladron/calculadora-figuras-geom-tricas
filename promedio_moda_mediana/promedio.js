//calculo básico:
const lista1 = [
    100, 
    200,
    300,
    500,
];



//creamos la funcion

function calcularMediaAritmetica(lista){
    let sumaLista = 0;

    for(let i = 0; i < lista.length; i++){
        sumaLista += lista[i];
    }

    const promedio = sumaLista / lista.length;  

    return promedio;
}