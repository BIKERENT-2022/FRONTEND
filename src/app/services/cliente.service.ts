import { environment } from './../../environments/environment';
import { Cliente } from './../models/Cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  basePath: string = environment.serverJson; 

  constructor(private http: HttpClient) { }

  getCliente(){
    return this.http.get<Cliente[]>(`${this.basePath}/api/clientes`);
  }

  /*
  addCliente(listaClientes: Cliente){
    return this.http.post<Cliente>(this.basePath, listaClientes);
  }*/
}
