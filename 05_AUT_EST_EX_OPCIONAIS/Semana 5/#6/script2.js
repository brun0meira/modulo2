function Calcular() {
var array = document.getElementById("valorI").value;
array = array.split(' ')
document.getElementById('recebido').innerHTML = array;
function compararNumeros(a, b) {
    return a - b;
}

var arraySort = array.sort(compararNumeros)
document.getElementById('ordenado').innerHTML = arraySort;

}

