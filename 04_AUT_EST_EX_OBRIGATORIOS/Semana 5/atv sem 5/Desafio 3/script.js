function CalAndShow() {
var array = document.getElementById("nums").value;
var foco = document.getElementById("foco").value;
array = array.split(',')

 for(let i = 0; i < array.length - 1; i++){
     for(let j = 0; j < array.length -1 - i; j++) {
         if(array[j] > array[j+1]){
             var salvar = array[j+1]
             array[j+1] = array[j]
             array[j] = salvar
         }
     }
 }

 document.getElementById('crescente').innerHTML = " A lista ordenada de forma crescente é " + array;
 var posicaofoco = array.indexOf(foco);

 if(array.indexOf(foco) != -1) {
    document.getElementById('posicao').innerHTML = " A posição do valor foco é " + posicaofoco;
} else {
    document.getElementById('posicao').innerHTML = " Valor foco invalido";
};
}
