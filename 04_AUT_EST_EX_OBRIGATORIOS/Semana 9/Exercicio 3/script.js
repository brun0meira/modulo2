function calcAndShow(){
    var input1 = document.getElementById('input').value; // variacom com valor do 1 input
    var input2 = document.getElementById('input2').value; // variacom com valor do 2 input
    var input3 = document.getElementById('input3').value; // variacom com valor do 3 input
    var tst = []; // variavel com array vazio para adicionar os nomes
    var aux = 1; // variavel so para colocar a posição dos nomes
    tst.push(input1); // adciona o valor do 1 input no array vazio
    tst.push(input2); // adciona o valor do 2 input no array vazio
    tst.push(input3); // adciona o valor do 3 input no array vazio
    tst.sort(); // organiza esse array em ordem alfabetica
    
    for(let i = 0; i < 3 ; i++){ // for para escrever no html o array em ordem alfabética
        document.getElementById('resposta' + i).innerHTML = aux + "° " + tst[i];
        aux++
    }
}


