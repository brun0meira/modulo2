function calcAndShow(){ // Função on click chamando no botao do html
    var input = document.getElementById('input').value; // variavel com o valor do input dado pelo usuario
    
    if(input[0] % 2 === 0){ // condição se o resto da divisão do digito da centena por 2 for igual a 0 o digito da centena é par 
        document.getElementById('resp').innerHTML = "<h2>Par</h2>"; //mostra o resultado na tela
    } else { // se a condição for falsa é impar
        document.getElementById('resp').innerHTML = "<h2>Impar</h2>"; //mostra o resultado na tela
    }
}