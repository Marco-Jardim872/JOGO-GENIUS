let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul
const sons = {
    0: "blue.wav",
    1: "green.wav",
    2: "yellow.wav",
    3: "red.wav"
}

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

const tocarSom = (num) => {
    const audio = new Audio(`./sounds/${sons[num]}`);
    
    audio.play();
   
}

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1);


        
    }
   
    
    
}

//acende cor
let lightColor = (element, number)=>{
    number = number * 1000;
   
    setTimeout(()=>{
        element.classList.add("selected");

     
     if(document.querySelector(".selected") === document.querySelector(".blue")){
          tocarSom(0)
            }else if(document.querySelector(".selected")  === document.querySelector(".green")){
                tocarSom(1)
            }else if(document.querySelector(".selected")  === document.querySelector(".yellow")){
                tocarSom(2)
            }else if(document.querySelector(".selected")  === document.querySelector(".red")){
                tocarSom(3)
            }
         
     

            
    },number - 400);
    setTimeout(()=>{
        element.classList.remove("selected");
    },number);
}

function gameOver(){
    order = [];
    clickedOrder = [];

    
    let overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    
    overlay.classList.add('active');
    popup.classList.add('active');
    
    btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
   
    }); 
    
        const audio2 = new Audio("../sounds/oh_no_oh_no.mp3 ");
        
        audio2.play();
       
   
    
    
}

//verifica a ordem dos botões clicados
let checkOrder = ()=>{
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    for(let i in clickedOrder){
        if((clickedOrder.length == order.length)&&(clickedOrder[i] == order[i])){
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
            nextLevel();
        }
    }
    
}
//função para o click do usuário 
let click = (color)=>{
    clickedOrder[clickedOrder.length]=color;
    
    createColorElement(color).classList.add("selected");
    
    setTimeout(()=>{
        createColorElement(color).classList.remove("selected");
        checkOrder();
    },250);
    
}

//função retorna cor
let createColorElement= (color)=>{
    if(color == 0){
        
        return green;
    }else if(color == 1){
        
        return red;
    }else if(color == 2){
        
        return yellow;
    }else if(color == 3){
        
        return blue;
    }
}
//função para o próximo nível
let  nextLevel = ()=>{
    score++;
    shuffleOrder();
   
}
//função para game over

//função inicia jogo
let playGame = ()=>{
    order = [];
    clickedOrder = [];
    score = 0;
    nextLevel();
}
//eventos de clique
green.onclick = ()=>click(0);
red.onclick = ()=>click(1);
yellow.onclick = ()=>click(2);
blue.onclick = ()=>click(3);


