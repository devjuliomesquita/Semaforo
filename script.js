let vermelho = document.getElementById('vermelho');
let amarelo = document.getElementById('amarelo');
let verde = document.getElementById('verde');
let semaforo = document.getElementById('semaforo');

function sn_vermelho(){
    semaforo.src = "./IMAGE/vermelho.png";
};
function sn_amarelo(){
    semaforo.src = "./IMAGE/amarelo.png";
};
function sn_verde(){
    semaforo.src = "./IMAGE/verde.png";
};



vermelho.addEventListener('click',sn_vermelho);
amarelo.addEventListener('click',sn_amarelo );
verde.addEventListener('click', sn_verde);
