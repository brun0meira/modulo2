function calcAndShow(){ // Função onclick chamando no html
    var input = Number(document.getElementById('input').value); // Variavel do valor primeiro input
    var input1 = Number(document.getElementById('input1').value); // Variavel do valor segundo input
    var tst = []; // variavel para adicionar os numeros primos

    for(let i = input; i <= input1; i++){ // for que declara o i como o valor do primeiro input e roda enquando o primeiro input for menor ou igual que o segundo (intervalo entre eles)
        var aux = 1; // declara a variavel auxiliar como 1 pq todo resto de divisão do numero por 1 da 0, entao o contador de divisores começa com 1
        for(let j = 2; j <= i; j++){ // for para descobrir se o numero do input é primo
            if(aux > 2){ // como o numero primo so tem dois divisores se a variavel auxuliar chegar a 2 o for para
                break
            }
            if(i % j === 0){ // se o resto da divisão do input for 0 ele adiciona um nos divisores (que se chega a 2 para)
                aux++
            }
        }
        if(aux == 2){ // se o numero de divisores for 2 ele adicona no array de numeros primos
            tst.push(i)
        }
    }


    document.getElementById('resposta0').innerHTML = tst; // mostra os numeros primos no html
}



