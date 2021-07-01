// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//Triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2+ base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

console.groupEnd();


//Código del círculo
console.group('Círculos');

function diametroCirculo(radio) {
    return radio * 2;
}

const pi = (Math.PI).toFixed(3);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return pi * diametro;
}

function areaCirculo(radio) {
    return pi * radio * radio;
}

console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro}`);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTriangulo1");
    const lado2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputTrianguloBase");

    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const valueBase = Number(base.value);

    const perimTriangulo = perimetroTriangulo(value1, value2, valueBase);
    alert(`El perimetro del triangulo es: ${perimTriangulo}`)
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTrianguloBase");
    const altura = document.getElementById("InputTrianguloAltura");

    const valueBase = Number(base.value);
    const valueAltura = Number(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(`El perimetro del triangulo es: ${area}`);
}