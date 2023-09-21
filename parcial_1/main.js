document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("form");

    
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        var nombre = formulario.elements["name"].value;
        var phone = formulario.elements["phone"].value;
        var correo = formulario.elements["email"].value;

        
        var mensaje = "Apreciado " + nombre + " hemos recibido su mensaje. Nos comunicaremos al telefono " + phone + 
                      " o a la direccion de email " + correo + " en los proximos dias.";
        "Nombre: " + nombre + "\nCorreo electrónico: " + correo;
        alert(mensaje);
    });
});

