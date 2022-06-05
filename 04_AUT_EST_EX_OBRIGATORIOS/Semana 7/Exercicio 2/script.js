function CalAndShow() { //Função do botão do HTML
    var val1 = document.getElementById("val1").value; //Pega valor do input 1
    var val2 = document.getElementById("val2").value; //Pega valor do input 2
    var guardar = val1; // Armazena em outra variavel o valor do input 1 (Pq ele vai mudar ent precisamos de uma variavel auxiliar)

    document.getElementById("val1").value = val2; //Troca os valores do input 1 pelo 2
    document.getElementById("val2").value = guardar; //Pega valor do input 2 pelo armazenado do input 1
}