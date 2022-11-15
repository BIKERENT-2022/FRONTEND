import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-pago-plan',
  templateUrl: './pago-plan.component.html',
  styleUrls: ['./pago-plan.component.css']
})
export class PagoPlanComponent implements OnInit {

  myForm!:FormGroup;

  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private router: Router,) 
    
    {this.reactiveForm();}

  ngOnInit(): void {
    console.log(this.myForm.value);
  }

  reactiveForm(){
    this.myForm= this.fb.group({
      id:[''],
      Cuenta: ['',[Validators.required]],
      Nombre: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      Correo:['',[Validators.required, Validators.email]],
      Telefono:['',[Validators.required, Validators.pattern(/^\d{9}$/)], Validators.minLength(9), Validators.maxLength(9)],
      Direccion:['',[Validators.required]],
      RUC:['', [Validators.required, Validators.pattern(/^\d{10}$/), Validators.minLength(10), Validators.maxLength(10)]]
    })
  }


  ValidarCampos()
  {
    let resp: boolean;
      //Obtendremos los valores de los inputs
      const Nombre = document.getElementById("Nombre") as HTMLInputElement | null;
      const Correo = document.getElementById("Correo") as HTMLInputElement | null;
      const Telefono = document.getElementById('Telefono') as HTMLInputElement  | null;
      const Direccion = document.getElementById('Direccion') as HTMLInputElement | null;
      const RUC = document.getElementById('RUC') as HTMLInputElement  | null;

      //Asignamos valores a los mensajes de validacion   
      const campos_vacios = document.getElementById("campos_vacios") as HTMLDivElement;
      const accept = document.getElementById("accept") as HTMLButtonElement;
  
      // Verificamos que los campos no se encuentren vacíos
      if( Nombre?.value == "" || Correo?.value == "" || Telefono?.value == "" || Direccion?.value == "" || RUC?.value == "")
      {
          // Si alguno de los campos se encuentra vacío, retornamos false
          resp = false;
      }
      else {
          // Si los campos están completos ocultamos retornamos true
          resp = true;
      }

      if(resp == true) {
        // Al validar que los campos estén completos ocultaremos el mensaje de validar campos
            campos_vacios.classList.remove("mostrar");
            this.snackBar.open('Información de empresa confirmada correctamente', '',{duration: 2000, panelClass: ['mat-primary']});
            this.router.navigate(['/Homee'])
      }
      else {
        // Al validar algun campo vacío, mostramos un mensaje validar campos
        campos_vacios.classList.add("mostrar");
      }

      return resp;
  }


}
