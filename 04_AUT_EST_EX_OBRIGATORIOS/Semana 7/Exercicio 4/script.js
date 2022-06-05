function CalAndShow() { //Função do botão no HTML
    var qtnd = document.getElementById('qntd').value; // Pega o valor do input de pessoas
    var pe = document.getElementById('pe').value; // Pega o valor do input do periodo

    if(qtnd <= 50 & pe == "Diurno"){ // compara o numero de pessoas e o periodo
        document.getElementById('resp1').innerHTML = "200 por pessoa"; // Adiciona o valor do voo por pessoa no html em um <h4> com id
    } else if (qtnd > 50 & pe == "Diurno"){ // caso a primeira condição seja falsa, compara com uma outra condição
        var precofinal = 200 - ((200 * 40) / 100); // Calcula o valor do desconto de 40% em 200
        document.getElementById('resp1').innerHTML = "valor final " + precofinal + " por pessoa (200 por pesso com desconto de 40%)"; // Adiciona o valor do voo por pessoa e com desconto no html em um <h4> com id
    } else if (qtnd <= 50 & pe == "Noturno"){
        document.getElementById('resp1').innerHTML = "100 por pessoa"; // Adiciona o valor do voo por pessoa no html em um <h4> com id
    } else if (qtnd > 50 & pe == "Noturno"){
        var precofinal = 100 - ((100 * 20) / 100); // Calcula o valor do desconto de 20% em 100
        document.getElementById('resp1').innerHTML = "Valor final " + precofinal + " por pessoa (100 por pessoa com desconto de 20%)"; // Adiciona o valor do voo por pessoa e com desconto no html em um <h4> com id
    }
}