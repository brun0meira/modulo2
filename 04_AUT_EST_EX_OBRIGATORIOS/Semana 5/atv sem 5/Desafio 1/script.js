function CalAndShow() {
    var v1 = parseFloat(document.getElementById('valor1').value);
    var v2 = parseFloat(document.getElementById('valor2').value);
    var sinal = document.getElementById('sinal').value;
    var resultado = null;

    if(sinal == "+") {
        resultado = v1 + v2
        document.getElementById('h2resp').innerHTML = v1 + " " + sinal + " " + v2 + " " + "=" + " " + resultado;
    } else if (sinal == "-") {
        resultado = v1 - v2
        document.getElementById('h2resp').innerHTML = v1 + " " + sinal + " " + v2 + " " + "=" + " " + resultado;
      } else if (sinal == "*") {
        resultado = v1 * v2
        document.getElementById('h2resp').innerHTML = v1 + " " + sinal + " " + v2 + " " + "=" + " " + resultado;
      } else if (sinal == "/") {
        resultado = v1 / v2
        document.getElementById('h2resp').innerHTML = v1 + " " + sinal + " " + v2 + " " + "=" + " " + resultado;
      } else if (sinal == "%") {
        resultado = v1 % v2
        document.getElementById('h2resp').innerHTML = v1 + " " + sinal + " " + v2 + " " + "=" + " " + resultado;
      } else if (sinal == "//") {
        resultado = Math.floor(v1 / v2)
        document.getElementById('h2resp').innerHTML = v1 + " " + sinal + " " + v2 + " " + "=" + " " + resultado;
      } else {
        document.getElementById('h2resp').innerHTML = "Opção inválida";
      }
};