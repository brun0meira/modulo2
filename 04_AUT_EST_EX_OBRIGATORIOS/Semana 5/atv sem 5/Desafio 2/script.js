var buttonClear = document.getElementById("buttonclear");

function CalAndShow() {
 var preco = parseInt(document.getElementById('preco').value);
 var precof = null;
 var cem = 0;
 var cinquenta = 0;
 var vinte = 0;
 var dez = 0;
 var cinco = 0;
 var dois = 0;
 var um = 0;

if(preco >= 100) {
cem = parseInt(preco / 100)
precof = preco % 100
}
else{
    precof = preco;
}
console.log(cem)
console.log(precof)
if(precof >=50 ) {
cinquenta = parseInt(precof / 50)
precof = precof % 50
};
console.log(cinquenta)
console.log(precof)
if(precof >=20) {
vinte = parseInt(precof / 20)
precof = precof % 20
};
console.log(vinte)
console.log(precof)

if(precof >=10) {
dez = parseInt(precof / 10)
precof = precof % 10
};
console.log(dez)
console.log(precof)

if(precof >= 5) {
cinco = parseInt(precof / 5)
precof = precof % 5
};
console.log(cinco)
console.log(precof)

if(precof >= 2) {
dois = parseInt(precof / 2)
precof = precof % 2
};
console.log(dois)
console.log(precof)

if(precof >=1) {
um = parseInt(precof / 1)
};
console.log(um)
console.log(precof)

if(cem > 0) {
    document.getElementById('cem').innerHTML = "Pagar com " + cem + " notas de R$100,00";
}

if(cinquenta > 0) {
    document.getElementById('cinquenta').innerHTML = "Pagar com " + cinquenta + " notas de R$50,00";
}

if(vinte > 0) {
    document.getElementById('vinte').innerHTML = "Pagar com " + vinte + " notas de R$20,00";
}

if(dez > 0) {
    document.getElementById('dez').innerHTML = "Pagar com " + dez + " notas de R$10,00";
}

if(cinco > 0) {
    document.getElementById('cinco').innerHTML = "Pagar com " + cinco + " notas de R$5,00";
}

if(dois > 0) {
    document.getElementById('dois').innerHTML = "Pagar com " + dois + " notas de R$2,00";
}

if(um > 0) {
    document.getElementById('um').innerHTML = "Pagar com " + um + " notas de R$1,00";
}

buttonClear.classList.toggle("hide");
}


function ClearHtml() {
    document.getElementById('cem').innerHTML = "";
    document.getElementById('cinquenta').innerHTML = "";
    document.getElementById('vinte').innerHTML = "";
    document.getElementById('dez').innerHTML = "";
    document.getElementById('cinco').innerHTML = "";
    document.getElementById('dois').innerHTML = "";
    document.getElementById('um').innerHTML = "";
    buttonClear.classList.toggle("hide");
}