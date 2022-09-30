function ValidarCampos()
{
    //Obtendremos los valores de los inputs
    email = document.getElementById('email');
    newpwd = document.getElementById('newpwd');
    conpwd = document.getElementById('conpwd');

    // Verificamos que los campos no se encuentren vacíos
    if( email.value == "" || newpwd.value == "" || conpwd.value == "")
    {
        // Si alguno de los campos se encuentra vacío, retornamos false
        return false;
    }
    else {
        // Si los campos están completos ocultamos retornamos true
        return true;
    }
}

function verificarPasswords() {
    //Obtendremos los valores de contraseña
    newpwd = document.getElementById('newpwd');
    conpwd = document.getElementById('conpwd');
    
    if (ValidarCampos() == false) {
        // Ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
        // Al validar algun campo vacío, mostramos un mensaje validar campos
        document.getElementById("campos_vacios").classList.add("mostrar");
    }
    else {
        // Al validar que los campos estén completos ocultaremos el mensaje de validar campos
        document.getElementById("campos_vacios").classList.remove("mostrar");

        //Verificaremos que los valores coincidan
        if (newpwd.value != conpwd.value) {
    
            // Si las constraseñas no coinciden mostramos un mensaje
            document.getElementById("error").classList.add("mostrar");
        
            return false;                
        }
        else {

            // Si las contraseñas coinciden ocultamos el mensaje de error
            document.getElementById("error").classList.remove("mostrar");
        
            // Mostramos un mensaje mencionando que las Contraseñas coinciden
            document.getElementById("ok").classList.remove("ocultar");
        
            // Desabilitamos el botón de login
            document.getElementById("login").disabled = true;
        
            // Refrescamos la página (Simulación de envío del formulario)
            setTimeout(function() {
            location.reload();
            }, 5000);
        
            return true;
        }
    }
}