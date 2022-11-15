import { environment } from './../../environments/environment';
import { Usuario } from './../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  resourcePath: string= environment.serverJson; 
  
  constructor(private http: HttpClient) { }

  addUsuario(listaUsuarios: Usuario){
    return this.http.post<Usuario>(`${this.resourcePath}/api/usuarios`, listaUsuarios);
  }

  //getlistUsuario(){return this.http.get<Usuario[]>(this.resourcePath);}
}