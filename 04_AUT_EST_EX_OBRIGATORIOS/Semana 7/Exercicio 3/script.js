function CalAndShow() { //Função on click do html
    var val1 = document.getElementById('qntd').value; //pega o valor do numero de telefone
    var format = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g; //formato do telefone em REGEX
    
    if (format.test(val1)) { //compaara o valor do numero de telefone com o formato do regex e retorna se é valido ou não
        document.getElementById('resp1').innerHTML = "Formato Valido";
    } else {
        document.getElementById('resp1').innerHTML = "Formato Invalido";
    };
}