
const calcPromedio = (lista) => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

const lista = [250, 200, 300, 350];

console.log(calcPromedio(lista));
