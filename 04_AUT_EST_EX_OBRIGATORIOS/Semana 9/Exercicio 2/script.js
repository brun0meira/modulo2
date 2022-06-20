function calcAndShow(){
    var input = document.getElementById('input').value; // variavel com valor do input dado pelo usuario
    var tst = []; // variavel com array vazio
    var aux = 0; // variavel auxiliar
    
    for(let i = 0; i < input.length ; i++){ // for que soma os digitos do numero pelo usuario
        tst.push(parseInt(input[i])); // adiciona no array o primeiro digito do numero dado pelo usuario
        aux += tst[i] // soma na variavel auxiliar o primeiro digito do array q acabamos de adicionar
    }
    document.getElementById('resp').innerHTML = "<h2>A soma dos digitos é " +  aux + "</h2>"; // mostra na tela a soma dos digitos
}


