function Calcular() {
var array = document.getElementById("valorI").value;
array = array.split(' ')
var final = 0;


if(array[0] == 1){
    final = (array[1] * 4).toFixed(2);
    document.getElementById('resposta').innerHTML ="Total: R$ " + final;
} else if(array[0] == 2) {
    final = (array[1] * 4.50).toFixed(2);
    document.getElementById('resposta').innerHTML ="Total: R$ " + final;  
} else if(array[0] == 3) {
    final = (array[1] * 5).toFixed(2);
    document.getElementById('resposta').innerHTML ="Total: R$ " + final;  
} else if(array[0] == 4) {
    final = (array[1] * 2).toFixed(2);
    document.getElementById('resposta').innerHTML ="Total: R$ " + final;  
} else if(array[0] == 5) {
    final = (array[1] * 1.50).toFixed(2);
    document.getElementById('resposta').innerHTML ="Total: R$ " + final;  
};
}

