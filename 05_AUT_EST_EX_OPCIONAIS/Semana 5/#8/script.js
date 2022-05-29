function Calcular() {
    var valorInicial = parseInt(document.getElementById('valorI').value);
    var valorFinal = parseInt(document.getElementById('valorF').value);
    var horas = null;

    if (valorInicial <= valorFinal) {
        horas = valorFinal - valorInicial;
        document.getElementById('horas').innerHTML = "O jogo teve duração de " + horas + " horas.";
    } else {
        horas = (24 - valorInicial) + valorFinal
        document.getElementById('horas').innerHTML = "O jogo teve duração de " + horas + " horas.";
    };
}
