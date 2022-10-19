import { Cliente } from './../models/Cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  basePath: string="http://localhost:52171/Cliente"

  constructor(private http: HttpClient) { }

  addCliente(listaClientes: Cliente){
    return this.http.post<Cliente>(this.basePath, listaClientes);
  }


  getlist(){return this.http.get<Cliente[]>(this.basePath);}
}
