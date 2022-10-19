import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../models/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {
  
  myForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private router: Router)
    
    {this.reactiveForm();}

  ngOnInit(): void {
    console.log(this.myForm.value);
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      email:  ['', [Validators.required, Validators.email]],
      newpwd: ['', [Validators.required, Validators.minLength(8)]],
      conpwd: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  UpdatePassword()
  {
    const listaClientes: Cliente={
      id : 0,
      Cuenta : this.myForm.get('Cuenta')!.value,
      NombreUsuario : this.myForm.get('NombreUsuario')!.value,
      CorreoElectronico : this.myForm.get('email')!.value,
      contrasenia : this.myForm.get('conpwd')!.value
    }
  }
  
  ValidarCampos()
  {
      //Obtendremos los valores de los inputs
      const email = document.getElementById("email") as HTMLInputElement | null;
      const newpwd = document.getElementById('newpwd') as HTMLInputElement  | null;
      const conpwd = document.getElementById('conpwd') as HTMLInputElement | null;
  
      // Verificamos que los campos no se encuentren vacíos
      if( email?.value == "" || newpwd?.value == "" || conpwd?.value == "")
      {
          // Si alguno de los campos se encuentra vacío, retornamos false
          return false;
      }
      else {
          // Si los campos están completos ocultamos retornamos true
          return true;
      }
  }

  verificarPasswords(){
    //Obtendremos los valores de contraseña
    const newpwd = document.getElementById('newpwd') as HTMLInputElement;
    const conpwd = document.getElementById('conpwd') as HTMLInputElement;

    //Asignamos valores a los mensajes de validacion
    const error = document.getElementById("error") as HTMLDivElement;
    const campos_vacios = document.getElementById("campos_vacios") as HTMLDivElement;
    const ok = document.getElementById("ok") as HTMLDivElement;
    const login = document.getElementById("login") as HTMLButtonElement;

    
    if (this.ValidarCampos() == false) {
        // Ocultamos el mensaje de error
        error.classList.remove("mostrar");
        // Al validar algun campo vacío, mostramos un mensaje validar campos
        campos_vacios.classList.add("mostrar");
        
        return false;
    }
    else {
        // Al validar que los campos estén completos ocultaremos el mensaje de validar campos
        campos_vacios.classList.remove("mostrar");

        //Verificaremos que los valores coincidan
        if (newpwd.value != conpwd.value) {
    
            // Si las constraseñas no coinciden mostramos un mensaje
            error.classList.add("mostrar");
        
            return false;                
        }
        else {

            // Si las contraseñas coinciden ocultamos el mensaje de error
            error.classList.remove("mostrar");
        
            // Mostramos un mensaje mencionando que las Contraseñas coinciden
            ok.classList.remove("ocultar");
        
            
            // Desabilitamos el botón de login
            login.disabled = true;
        
            // Refrescamos la página (Simulación de envío del formulario)
            this.snackBar.open('Contraseña actualizada correctamente', '',{duration: 3000});
            {this.router.navigate(['/verPerfil'])}
            
            return true;
        }
    }
  }
}
