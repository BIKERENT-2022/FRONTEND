import { RepartidorService } from './../../services/repartidor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Repartidor } from './../../models/Repartidor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repartidores-editar',
  templateUrl: './repartidores-editar.component.html',
  styleUrls: ['./repartidores-editar.component.css']
})
export class RepartidoresEditarComponent implements OnInit {

  myForm!: FormGroup;
  Repartidor!: Repartidor;
  idRepartidor!: any;

  constructor(private fb: FormBuilder,
    private RepartidorService: RepartidorService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.idRepartidor = this.route.snapshot.paramMap.get('id');
    this.RepartidorService.getRepartidorId(this.idRepartidor).subscribe((data)=>{
      this.Repartidor=data;
      this.myForm = this.fb.group({
<<<<<<< HEAD
        nombre: [this.Repartidor.nombre,[Validators.required, Validators.maxLength(60)]],
        apellido:[this.Repartidor.apellido,[Validators.required]],
        dni:[this.Repartidor.dni,[Validators.required]],
        celular:[this.Repartidor.celular,[Validators.required]],
        v:[this.Repartidor.correo,[Validators.required]],
=======
        Nombres: [this.Repartidor.Nombres,[Validators.required, Validators.maxLength(60)]],
        Apellidos:[this.Repartidor.Apellidos,[Validators.required]],
        DNI:[this.Repartidor.DNI,[Validators.required]],
        Celular:[this.Repartidor.Celular,[Validators.required]],
        CorreoElectronico:[this.Repartidor.CorreoElectronico,[Validators.required]],
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
      })
    })
  }
  
  updateRepartidor(){
    const Repartidor: Repartidor = {
      id : 0,
<<<<<<< HEAD
      nombre : this.myForm.get('nombre')!.value,
      apellido : this.myForm.get('apellido')!.value,
      dni : this.myForm.get('dni')!.value,
      celular : this.myForm.get('celular')!.value,
      correo : this.myForm.get('correo')!.value,
=======
      Nombres : this.myForm.get('Nombres')!.value,
      Apellidos : this.myForm.get('Apellidos')!.value,
      DNI : this.myForm.get('DNI')!.value,
      Celular : this.myForm.get('Celular')!.value,
      CorreoElectronico : this.myForm.get('CorreoElectronico')!.value,
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
    }
    this.RepartidorService.updateRepartidor(this.idRepartidor,Repartidor).subscribe({
      next:(data)=>{
        this.snackBar.open('actualizado correctamente', '',{duration: 3000});
        this.router.navigate(['/repartidores'])
      },
      error: (err)=>{console.log(err)}
    })
  }

}
