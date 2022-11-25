import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bicicleta } from 'src/app/models/Bicicleta';
import { BicicletaService } from 'src/app/services/bicicleta.service';

@Component({
  selector: 'app-minibmx-c',
  templateUrl: './minibmx-c.component.html',
  styleUrls: ['./minibmx-c.component.css']
})
export class MinibmxCComponent implements OnInit {

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
<<<<<<< HEAD
      empresa:["", [Validators.required]],
=======
      id_empresa:["", [Validators.required]],  //import Validators
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
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
<<<<<<< HEAD
          this.myForm.get("empresa")!.setValue(data.empresa.ruc);
=======
          this.myForm.get("id_empresa")!.setValue(data.id_empresa);
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
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

  getImagen(): string {
    return this.myForm.get("imagen")?.value
  }

}
