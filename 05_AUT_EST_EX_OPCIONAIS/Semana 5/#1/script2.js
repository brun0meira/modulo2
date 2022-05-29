function Calcular() {
var array = document.getElementById("valorI").value;
array = array.split(' ')

if (array[1] > array[2] & array[3] > array[0] & (array[2] + array[3]) > (array[0] + array[1]) & array[0,1,2,3] % 2 == 0 & Math.sign(array[0,1,2,3]) == 1){
    document.getElementById('resposta').innerHTML ="Valores aceitos";
} else {
    document.getElementById('resposta').innerHTML ="Valores nao aceitos";
};
}