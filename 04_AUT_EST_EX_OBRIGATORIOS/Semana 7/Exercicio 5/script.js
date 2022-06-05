function getInput() { //Função do botão chamado pelo html
    var students = document.getElementById('students').value; //input do numero de alunos
    for(let i = 1; i <= students; i++){  // for que adiciona os campos de prova e trabalho dependendo do numero de alunos
        const div = document.createElement("div");
        div.innerHTML = `<div class="input"><h2>Aluno ` + i + `</h2><input id="in" class="nprova" type="number" placeholder="Nota prova">
        <input id="in" class="ntrabalho" type="number" placeholder="Nota trabalho"></div>`
        document.body.appendChild(div);
    };

const button = document.createElement("div"); // Adiciona um botão logo depois dos inputs para calcular as notas
    button.innerHTML = `<div class="input"><button class="button" id="teste">Calcular notas</button></div>`
    document.body.appendChild(button);

let buttoncalc = document.getElementById("teste"); //var que pega o id do botão de calcular

buttoncalc.addEventListener("click", function (event) { // evento que pega todos os valores dos inputs das provas e transforma numa array
    event.preventDefault();
    let valorprova = document.querySelectorAll(".nprova");
    
    let arrayprova = [].map.call(valorprova, function (input) {
        return input.value;
    });
    var numberArrayProva = arrayprova.map(Number); // tranforma array das provas em number
    var somaprova = 0;
    for(let i = 0; i < numberArrayProva.length; i++) { // for que soma todas as notas da prova
    somaprova += numberArrayProva[i];
    };

    var valortrab = document.querySelectorAll(".ntrabalho");
    
    var arraytrab = [].map.call(valortrab, function (input) {
        return input.value;
    });
    console.log("esse é o array dos trabalhos ", arraytrab);
    var numberArrayTrab = arraytrab.map(Number); // tranforma array das provas em number
    var somatrab = 0;
    for(let i = 0; i < numberArrayTrab.length; i++) { // for que soma todas as notas da prova
    somatrab += numberArrayTrab[i];
    };

    // Daqui para baixo é as saidas dos aluno
    var array = []; //Array criado para colocar todas as médias dos alunos
    var naluno = 0; // Variavel somente para escrever de qual aluno é a média
    for(let j = 0; j < students; j++) {
        naluno += 1; //Adiciona 1 na var naluno
        let valorProva = numberArrayProva[j]; // pega o valor j dentro da array de prova
        let valorTrabalho = numberArrayTrab[j]; // pega o valor j dentro da array dos trabalhos
        let media = ((valorProva * 2) + (valorTrabalho * 3)) / 5; // faz o calculo da média
        const divm = document.createElement("div"); //mostra a média (Thais, não consegui que esse resultado mostrasse dentro da minha div de resultado então ele está indo como ultimo element da pagina html, não sei pq)
        divm.innerHTML = "<div class='tittle'><h4>A media do aluno " + naluno + " com os pesos é " + media + "</h4></div>";
        document.body.appendChild(divm);

        array.push(media); // adiciona as médias dos alunos na array
    };
    
    var somamedias = 0; //var criada para armazenar a soma das medias dos alunos
    for(let p = 0; p < array.length; p++) { // for que soma todas as médias
        somamedias += array[p];
    };
    
    var mediageral = somamedias.toFixed(2) / students; // divide a soma das medias com o numero de alunos
    document.getElementById('resp2').innerHTML = "A média geral, considerando todos os alunos é " + mediageral.toFixed(1); //Mostra a media geral dos alunos


    var medAriProv = somaprova / arrayprova.length; // Faz a média aritmética das todas da prova e armazena na variavel
    document.getElementById('resp3').innerHTML = "A média artiméticas das notas das provas é " + medAriProv; //Mostra a media da prova geral


    var medAriTrab = somatrab / arraytrab.length; // Faz a média aritmética das todas do trabalho e armazena na variavel
    document.getElementById('resp4').innerHTML = "A média artiméticas das notas dos trabalhos é " + medAriTrab; //Mostra a media dos trabalhos geral
    

    var provamin = Math.min(...numberArrayProva); //pega o menor valor dentro do array de notas da prova
    var provamax = Math.max(...numberArrayProva); //pega o maior valor dentro do array de notas da prova
    document.getElementById('resp5').innerHTML = "A menor nota das prova é " + provamin + " e a maior nota é " + provamax; //exibe na pag o maior e menor valor das provas
    

    var trabmin = Math.min(...numberArrayTrab); //pega o menor valor dentro do array de notas do trabalho
    var trabmax = Math.max(...numberArrayTrab); //pega o maior valor dentro do array de notas do trabalho
    document.getElementById('resp6').innerHTML = "A menor nota dos trabalhos é " + trabmin + " e a maior nota é " + trabmax; //exibe na pag o maior e menor valor dos trabalhos
    });
};