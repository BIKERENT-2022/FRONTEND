import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bicicleta } from 'src/app/models/Bicicleta';
import { BicicletaService } from 'src/app/services/bicicleta.service';

@Component({
  selector: 'app-minibmx-e',
  templateUrl: './minibmx-e.component.html',
  styleUrls: ['./minibmx-e.component.css']
})
export class MinibmxEComponent implements OnInit {

  myForm!: FormGroup;
  id!: number;

  constructor(private formBuilder:FormBuilder,
    private bicicletaService: BicicletaService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.formBuilder.group({
      id:[""],
      //id_empresa:["", [Validators.required]],  //import Validators
      modelo:["", [Validators.required]],
      marca:["", [Validators.required]],
      color:["", [Validators.required]],
      tipo:["", [Validators.required]],
      imagen:["", [Validators.required]]
    })

    this.id = this.activatedRouter.snapshot.params["id"];

    if((this.id!=undefined && this.id!=0)) {
      this.bicicletaService.getOneBicicleta(this.id).subscribe(
        (data: Bicicleta) => {
          this.myForm.get("id")!.setValue(data.id);
          //this.myForm.get("id_empresa")!.setValue(data.id_empresa);
          this.myForm.get("modelo")!.setValue(data.modelo);
          this.myForm.get("marca")!.setValue(data.marca);
          this.myForm.get("color")!.setValue(data.color);
          this.myForm.get("tipo")!.setValue(data.tipo);
          this.myForm.get("imagen")!.setValue(data.imagen);
        }
      )
    }
    else {
      this.id = 0;
    }
  }

  saveBicicleta():void{
    const bicicleta:Bicicleta = {
      id:this.id,
      id_empresa:this.myForm.get("id_empresa")?.value,
      modelo:this.myForm.get("modelo")?.value,
      marca:this.myForm.get("marca")?.value,
      color:this.myForm.get("color")?.value,
      tipo:this.myForm.get("tipo")?.value,
      imagen:this.myForm.get("imagen")?.value
    }

    if(this.id == 0) { //se agrega
      this.bicicletaService.addBicicleta(bicicleta).subscribe({
        next: (data) => {
          this.router.navigate(["/resmod"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.bicicletaService.updateBicicleta(this.id ,bicicleta).subscribe({
        next: (data) => {
          this.router.navigate(["/resmod"]);
        },
        error: (err) => {
          this.router.navigate(["/resmod"]);
          console.log(err);
        }
      })
    }
  }

  deleteBicicleta(){
    this.bicicletaService.deleteBicicleta(this.id).subscribe({
      next: (data) => {
        this.router.navigate(["/resmod"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  getImagen(): string {
    return this.myForm.get("imagen")?.value
  }


}