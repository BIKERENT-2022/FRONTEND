<<<<<<< HEAD
import { Usuario } from './../models/Usuario';
=======
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
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
<<<<<<< HEAD
  }

  getID(usuario: any){
    return this.http.get<Cliente>(`${this.basePath}/api/clientes/usuario${usuario}`);
  }
  
  updateCliente(usuario: any, cliente: Cliente){
    return this.http.put<Cliente>(`${this.basePath}/api/clientes/${usuario}`, cliente);
  }

  exportCliente() {
    return this.http.get("http://localhost:8080/api/clientes/export/excel", {responseType: "blob"});
  }


  getOneCliente(id: any) {
    return this.http.get<Cliente>(`${this.basePath}/api/clientes/${id}`);
  }
=======
  }

  /*
  addCliente(listaClientes: Cliente){
    return this.http.post<Cliente>(this.basePath, listaClientes);
  }*/
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
}
