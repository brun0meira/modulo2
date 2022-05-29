function Calcular() {
    var array = document.getElementById("valorI").value;
    array = array.split(' ');

if(Math.sign(array[0]) == 1 & Math.sign(array[1]) == 1) {
    document.getElementById('resposta').innerHTML ="Q1";
} else if(Math.sign(array[0]) == -1 & Math.sign(array[1]) == -1) {
    document.getElementById('resposta').innerHTML ="Q3";
} else if(Math.sign(array[0]) == 1 & Math.sign(array[1]) == -1) {
    document.getElementById('resposta').innerHTML ="Q4";
} else if (Math.sign(array[0]) == -1 & Math.sign(array[1]) == 1) {
    document.getElementById('resposta').innerHTML ="Q4";
} else if(array[0] == 0 & array[1] == 0) {
    document.getElementById('resposta').innerHTML ="Origem";
};
}

