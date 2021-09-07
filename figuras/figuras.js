// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}


console.groupEnd();
// código triángulo
console.group("Triangulo");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3){
    const lado1 = parseInt(ladoTriangulo1);
    const lado2 = parseInt(ladoTriangulo2);
    const lado3 = parseInt(ladoTriangulo3);
    return lado1 + lado2 + lado3;
}

function areaTriangulo(ladoTriangulo3, alturaTriangulo){
    return ( ladoTriangulo3 * alturaTriangulo ) / 2;
}

function alturaTrianguloIsosceles(lado1, lado2, lado3){
    const a = parseInt(lado1);
    const b = parseInt(lado2);
    const c = parseInt(lado3);
    if( a != b){
        return 0;
    }
    const altura = Math.sqrt( ( Math.pow(a, 2) - ( (Math.pow(c, 2) / 4) ) ) );
    return altura;
}

console.groupEnd();

// codigo circulo
console.group("circulo");

function diametro(radio){
    return radio * 2;
}

function circunferencia(radio){
    const diam = diametro(radio);
    return diam * Math.PI;
}

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}
console.groupEnd();

//formulario

// FUNCIONES CUADRADO
function cacularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function cacularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}

// FUNCIONES TRIANGULO
function cacularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);

    alert(perimetro);
}

function cacularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo3");
    const base = input3.value;

    const input4 = document.getElementById("inputTriangulo4");
    const altura = input4.value;

    const area = areaTriangulo(base, altura);

    alert(area);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const altura = alturaTrianguloIsosceles(value1, value2, value3);

    if(altura > 0){
        alert(altura);
    }else{
        alert("El triágulo no es isósceles, comprueba que los lados 1 y 2 sean iguales");
    }
}

// FUNCIONES CIRCULO

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = circunferencia(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}