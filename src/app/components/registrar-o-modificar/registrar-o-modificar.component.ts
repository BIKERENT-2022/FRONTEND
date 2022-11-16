import { BicicletaService } from './../../services/bicicleta.service';
import { Bicicleta } from './../../models/Bicicleta';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registrar-o-modificar',
  templateUrl: './registrar-o-modificar.component.html',
  styleUrls: ['./registrar-o-modificar.component.css']
})
export class RegistrarOModificarComponent implements OnInit {

  bicicleta!: Bicicleta[];
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
