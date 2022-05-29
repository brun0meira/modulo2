function Calcular() {
    var valorSalario = parseFloat(document.getElementById('valorI').value);
    var total = 0;
    var quantos = 0;
    var percentual = 0;

    if(valorSalario <= 400.00 ){
        console.log("15")
        percentual = 15;
        quantos = (valorSalario / 100) * percentual;
        total = (valorSalario + quantos);
        document.getElementById('total').innerHTML = "Novo salario: " + total;
        document.getElementById('quantos').innerHTML = "Reajuste ganho: " + quantos;
        document.getElementById('percentual').innerHTML = "Em percentual: " + percentual + "%";
    } else if(valorSalario <= 800.00) {
        console.log("12")
        percentual = 12;
        quantos = (valorSalario / 100) * percentual;
        total = (valorSalario + quantos);
        document.getElementById('total').innerHTML = "Novo salario: " + total;
        document.getElementById('quantos').innerHTML = "Reajuste ganho: " + quantos;
        document.getElementById('percentual').innerHTML = "Em percentual: " + percentual + "%";
    } else if(valorSalario <= 1200.00) {
        console.log("10")
        percentual = 10;
        quantos = (valorSalario * percentual) / 100;
        total = (valorSalario + quantos);
        document.getElementById('total').innerHTML = "Novo salario: " + total;
        document.getElementById('quantos').innerHTML = "Reajuste ganho: " + quantos;
        document.getElementById('percentual').innerHTML = "Em percentual: " + percentual + "%";
    } else if(valorSalario <= 2000.00) {
        console.log("7")
        percentual = 7;
        quantos = (valorSalario * percentual) / 100;
        total = (valorSalario + quantos);
        document.getElementById('total').innerHTML = "Novo salario: " + total;
        document.getElementById('quantos').innerHTML = "Reajuste ganho: " + quantos;
        document.getElementById('percentual').innerHTML = "Em percentual: " + percentual + "%";
    } else if (valorSalario > 2000.01) {
        console.log("4")
        percentual = 4;
        quantos = (valorSalario * percentual) / 100;
        total = (valorSalario + quantos);
        document.getElementById('total').innerHTML = "Novo salario: " + total;
        document.getElementById('quantos').innerHTML = "Reajuste ganho: " + quantos;
        document.getElementById('percentual').innerHTML = "Em percentual: " + percentual + "%";
    };
}
