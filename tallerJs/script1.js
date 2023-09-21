function calcular() {

    let peso = $('#peso').val();
    let altura = document.getElementById('altura').value;
    let imc = 0;

    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura);
    }

    if(imc < 18.5){
        document.getElementById('request').innerHTML = 'Bajo peso: '+imc;
    }

    if(imc > 18.5 && imc < 24.9){
        document.getElementById('request').innerHTML = 'Peso normal: ' + imc;
    }

    if (imc > 25 && imc < 29.9){
        document.getElementById('request').innerHTML = 'Sobrepeso: ' + imc;
    }

    if(imc > 30){
        document.getElementById('request').innerHTML = 'Obesidad: ' + imc;
    }
}

   
