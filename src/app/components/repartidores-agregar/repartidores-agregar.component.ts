import { Repartidor } from './../../models/Repartidor';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepartidorService } from './../../services/repartidor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


//interface HTMLInputEvent extends Event{
  //target: HTMLInputElement & EventTarget;
//}


@Component({
  selector: 'app-repartidores-agregar',
  templateUrl: './repartidores-agregar.component.html',
  styleUrls: ['./repartidores-agregar.component.css']
})
export class RepartidoresAgregarComponent implements OnInit {

  myForm!:FormGroup;
  //file!:File;
  //photoSelected !: String | ArrayBuffer | null;

  constructor(private fb: FormBuilder,
    private RepartidorService: RepartidorService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) {this.reactiveForm();}

  ngOnInit(): void {
  }

  reactiveForm(){
    this.myForm= this.fb.group({
      id:[''],
<<<<<<< HEAD
      nombre: ['',[Validators.required, Validators.maxLength(60)]],
      apellido:['',[Validators.required]],
      dni:['',[Validators.required]],
      celular:['',[Validators.required]],
      correo:['',[Validators.required]]
=======
      Nombres: ['',[Validators.required, Validators.maxLength(60)]],
      Apellidos:['',[Validators.required]],
      DNI:['',[Validators.required]],
      Celular:['',[Validators.required]],
      CorreoElectronico:['',[Validators.required]]
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
    })
  }

  saveRepartidor(){
    const Repartidor: Repartidor={
      id : 0,
<<<<<<< HEAD
      nombre : this.myForm.get('nombre')!.value,
      apellido : this.myForm.get('apellido')!.value,
      dni : this.myForm.get('dni')!.value,
      celular : this.myForm.get('celular')!.value,
      correo : this.myForm.get('correo')!.value
=======
      Nombres : this.myForm.get('Nombres')!.value,
      Apellidos : this.myForm.get('Apellidos')!.value,
      DNI : this.myForm.get('DNI')!.value,
      Celular : this.myForm.get('Celular')!.value,
      CorreoElectronico : this.myForm.get('CorreoElectronico')!.value
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
    }

    this.RepartidorService.addRepartidor(Repartidor).subscribe({
      next:(data)=>{
        this.snackBar.open('registrado correctamente', '',{duration: 3000});
        this.router.navigate(['/repartidores'])
      },
      error: (err)=>{console.log(err)}
    })
  }

}
