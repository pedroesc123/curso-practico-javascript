
function esPar (numero) {
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
};

const calcularMediana = (lista) => {
    let mediana = 0;
    const mitadLista = parseInt(lista.length / 2);

    const lista1 = lista.sort(function(a,b) {
        return a - b;
    });

    if (esPar(lista1.length)) {
        mediana = (lista1[mitadLista - 1] + lista1[mitadLista]) / 2;
    } else {
        mediana = lista1[mitadLista];
    }

    return mediana;
};


console.log(calcularMediana([1,10,4,5,2]));
