function ValidarCampos()
{
    //Obtendremos los valores de los inputs (user,pwd)
    nameuser = document.getElementById('NameUser');
    pwd = document.getElementById('pwd');


   // Verificamos que los campos no se encuentren vacíos
   if( nameuser.value == "" || pwd.value == "")
   {
       // Si alguno de los campos se encuentra vacío, retornamos false
       document.getElementById("campos_vacios").classList.remove("ocultar");
       document.getElementById("campos_vacios").classList.add("mostrar");
       return true;
   }
   else {
       // Si los campos están completos ocultamos mensaje retornamos true
       document.getElementById("campos_vacios").classList.remove("mostrar");
       document.getElementById("campos_vacios").classList.add("ocultar");
       return false;
   }
}

function VerificarAccesoUsuario(){   

}