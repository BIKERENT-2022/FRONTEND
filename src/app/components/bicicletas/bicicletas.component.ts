import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bicicleta } from 'src/app/models/Bicicleta';
import { BicicletaService } from 'src/app/services/bicicleta.service';

@Component({
  selector: 'app-bicicletas',
  templateUrl: './bicicletas.component.html',
  styleUrls: ['./bicicletas.component.css']
})
export class BicicletasComponent implements OnInit {

  bicicleta: Bicicleta[] = [];
  dataSource = new MatTableDataSource<Bicicleta>();
  displayColumns: string[] = ["img"];

  constructor(private bicicletaService:BicicletaService) { }

  ngOnInit(): void {
    this.getBicicletas();
  }

  getBicicletas(): void {
    this.bicicletaService.getBicicletas().subscribe(
      (data: Bicicleta[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
