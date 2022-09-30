let user;

const objUsuario = {
    nombre : "",
    DNI: "",
    Correo: "",
    Contraseña:"",
    Direcciones:"",
    Telefono:"",
    Tarjeta: "",
    Plan:""
}

let editar = false;

const datos = document.querySelector("#datos");
const innombre = document.querySelector("#fullname");

function DeleteInput(d)
{
    switch (d){
        case 1: document.getElementById("direction").value = ""; break;
        case 2: document.getElementById("creditcard").value = ""; break;
        case 3: document.getElementById("phone").value = ""; 
    }
}