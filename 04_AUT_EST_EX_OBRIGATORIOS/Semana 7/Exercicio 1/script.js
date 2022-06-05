function Adcionar(){ //Funcão do botão no HTML
   document.getElementById('qntd').value++; // adiciona +1 no valor do unput
};

function Tirar(){ //Funcão do botão no HTML 
  if(document.getElementById('qntd').value > 0){  // if com a condição que só tira 1 quando o valor for maior que 0
    document.getElementById('qntd').value--
  }
  
};




