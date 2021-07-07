// Helpers
function esPar(numero) {
    return (numero % 2 ===0);
}

const calcPromedio = (lista) => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

// Calculando salarios ordenados
const salariosCol = colombia.map (
    function (persona) {
        return persona.salary;
    }
).sort((a,b) =>  a-b);

// Calculadora de medianas
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        return calcPromedio([personaMitad1, personaMitad2]);

    } else {
        const personaMitad = lista [mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosCol);

// Mediana del top 10%

const spliceStart = (salariosCol.length * 90) / 100;
const spliceCount = salariosCol.length - spliceStart;

const salariosColTop10 = salariosCol.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log(medianaGeneralCol, medianaTop10Col);