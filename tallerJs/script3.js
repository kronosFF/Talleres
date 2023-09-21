const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var atemps = 0;

function adivinar (){
    var number = document.getElementById('number').value;

    if (number < numeroAleatorio){
        document.getElementById('request').innerHTML = '¡Más alto!';
        atemps += 1;
    }

    if(number > numeroAleatorio){
        document.getElementById('request').innerHTML = '¡Más bajo!';
        atemps += 1;
    }

    if(number == numeroAleatorio){
        atemps += 1;
        document.getElementById('request').innerHTML = '¡Correcto! Adivinaste el número. Ahora recarga la página para volver a jugar.';
        document.getElementById('atemps').innerHTML = 'Has adivinado despues de ' + atemps + ' intentos';
    }
}