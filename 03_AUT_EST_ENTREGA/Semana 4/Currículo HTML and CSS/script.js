var button = document.getElementById("buttonshow");
var buttona = document.getElementById("buttonshowa");
var buttonb = document.getElementById("buttonshowb");



button.addEventListener("click", function() {
var atv1 = document.getElementById("atv1");

atv1.classList.toggle("hide");

});

buttona.addEventListener("click", function() {
    var atv2 = document.getElementById("atv2");
    
    atv2.classList.toggle("hide");
    
    });

buttonb.addEventListener("click", function() {
    var atv3 = document.getElementById("atv3");
    
    atv3.classList.toggle("hide");
    
    });