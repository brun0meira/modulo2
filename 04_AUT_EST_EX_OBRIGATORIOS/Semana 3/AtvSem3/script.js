function CalAndShow() {
    var n1 = parseInt(document.getElementById('valor1').value);
    var gravidade = 10;
    var resultado = Number(n1 / gravidade);
    document.getElementById('tempo').innerHTML = 'O tempo total de subida do objeto foi ' + resultado + ' segundos';
    var y1 = Number(n1 * resultado);
    var y2 = Math.pow(resultado, 2);
    var y3 = Number(gravidade * y2);
    var y4 = Number(y3 / 2);
    var hmax = Number(y1 - y4);
    document.getElementById('hmax').innerHTML = 'A altura maxima do objeto foi ' + hmax + ' metros';
}
