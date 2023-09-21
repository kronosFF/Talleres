function piedraPapelTijeras () {
    var value = document.getElementById('opciones').value;
    var op = ["piedra", "papel", "tijera"];
    var ind = Math.floor(Math.random() * 3);
    var indice = op[ind];


    if(indice === "piedra" && value === "papel" || indice === "papel" && value === "piedra"){
        document.getElementById('request').innerHTML = 'Papel le gana a piedra';
    }

    if(indice === "piedra" && value === "piedra" || indice === "papel" && value === "papel" || indice === "tijera" && value === "tijera"){
        document.getElementById('request').innerHTML = 'Empate';
    }

    if(indice === "piedra" && value === "tijera" || indice === "tijera" && value === "piedra"){
        document.getElementById('request').innerHTML = 'Piedra le gana tijeras';
    }

    if(indice === "tijera" && value === "papel" || indice === "papel" && value === "tijera"){
        document.getElementById('request').innerHTML = 'Tijeras le gana a papel';
    }
}