function Calcular() {
    var array = document.getElementById("valorI").value;
    array = array.split(' ');

function compararNumeros(a, b) {
    return a - b;
}
var arraySort = array.sort(compararNumeros);
console.log(arraySort.reverse())

if (array[0] >= (arraySort[1] + arraySort[2])) {
    document.getElementById('resposta').innerHTML ="NAO FORMA TRIANGULO";
} else if(Math.pow(array[0],2 == (Math.pow(array[1],2) + Math.pow(array[2],2)))) {
    document.getElementById('resposta').innerHTML ="TRIANGULO RETANGULO";
} else if(Math.pow(array[0],2) > (Math.pow(array[1],2) + Math.pow(array[2],2))) {
    document.getElementById('resposta').innerHTML ="TRIANGULO OBTUSANGULO";
} else if(Math.pow(array[0],2) < (Math.pow(array[1],2 + Math.pow(array[1],2)))) {
    document.getElementById('resposta').innerHTML ="TRIANGULO ACUTANGULO";
} else if (array[0] == array[1] & array[1] == array[2] & array[0] == array[2]) {
    document.getElementById('resposta').innerHTML ="TRIANGULO EQUILATERO";
} else if(array[0] == array[1] || array[1] == array[2] || array[0] == array[2]) {
    document.getElementById('resposta').innerHTML ="TRIANGULO ISOSCELES";
};
}

