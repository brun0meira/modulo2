function calcAndShow(){ // função on click do botão do html
    var input = Number(document.getElementById('input').value); // Var com valor do input 
    var tst = [1,1]; //var de array com os dois primeiros numeros da serie de Fibonacci
    var resposta; // declaração de variavel sem tipo para usar no for
    var resposta2 = [1]; // variavel para exibição dos numeros na serie de Fibonacci
    

    for (let i = 0; i <= input; i++){ // for que faz a serie de Fibonacci
        resposta = tst[i] + tst[i + 1] // declara a variavel com a soma do ultimo numero do array tst com o anterior
        tst.push(resposta); // adiciona no array tst o proximo numero da serie de Fibonacci
    }

    for(let j = 1; j <= input; j++){ // for para mostrar a escala de fibonnaci ate o numero informado pelo usuario
        var teste = tst[j]; // declara uma variavel com o valor do segundo numero da serie de Fibonacci
        resposta2.push(teste) // adiciona o numero da serie de Fibonacci na variavel resposta 2
        if (teste == input){ // condição que se a variavel teste for igual ao numero do input do usuario ele para de adionar no array
            break
        }
    }
    document.getElementById('resposta0').innerHTML = resposta2; // mostra o array com todos os numero da serie de Fibonacci até o numero informado pelo usuario
}




