var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy 1");
        break;
    
    case 10:
        console.log("Soy 10");
        break;

    case 100:
        console.log("Soy 100");
        break;
        
    default:
        console.log(`Soy ${numero}`);
        break;



}



    //////// RETO ////////////

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];
    
    
    // let numero = 'a';
    //con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log(`Es un empate, tu elegiste ${user} y el CPU eligio ${machine}`);
        break;

    case (machine === 'piedra' && user === 'papel'):
        console.log(`Ganaste, tu elegiste ${user} y el CPU eligio ${machine}`);
        break;
    
    case (machine === 'papel'  && user === 'tijera'):
        console.log(`Ganaste, tu elegiste ${user} y el CPU eligio ${machine}`);
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log(`Ganaste, tu elegiste ${user} y el CPU eligio ${machine}`);
        break;
    default:
        console.log(`¡Perdiste!, tu elegiste ${user} y el CPU eligio ${machine}`);       
        break;
    }