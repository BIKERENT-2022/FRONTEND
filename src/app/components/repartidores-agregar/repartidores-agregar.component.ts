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
      Nombres: ['',[Validators.required, Validators.maxLength(60)]],
      Apellidos:['',[Validators.required]],
      DNI:['',[Validators.required]],
      Celular:['',[Validators.required]],
      CorreoElectronico:['',[Validators.required]]
    })
  }

  saveRepartidor(){
    const Repartidor: Repartidor={
      id : 0,
      Nombres : this.myForm.get('Nombres')!.value,
      Apellidos : this.myForm.get('Apellidos')!.value,
      DNI : this.myForm.get('DNI')!.value,
      Celular : this.myForm.get('Celular')!.value,
      CorreoElectronico : this.myForm.get('CorreoElectronico')!.value
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
