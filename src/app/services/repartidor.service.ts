import { Repartidor } from './../models/Repartidor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from './../../environments/environment';
=======
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

<<<<<<< HEAD
  basePath: string = environment.serverJson; 

  constructor(private http: HttpClient) { }

  getRepartidor(){
    return this.http.get<Repartidor[]>(`${this.basePath}/api/deliveries`);
  }
=======
  basePath: string="http://localhost:3000/Repartidores";

  constructor(private http: HttpClient) { }

  getRepartidor(){return this.http.get<Repartidor[]>(this.basePath);}

>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b

  getRepartidorId(id: any) {
    return this.http.get<Repartidor>(`${this.basePath}/${id}`);
  }

  addRepartidor(Repartidor: Repartidor){
    return this.http.post<Repartidor>(this.basePath, Repartidor);
  }

  updateRepartidor(id: any, Repartidor: Repartidor){
    return this.http.put<Repartidor>(`${this.basePath}/${id}`, Repartidor);
  }

  deleteRepartidor(id: any){
    return this.http.delete<Repartidor>(`${this.basePath}/${id}`);
  }
<<<<<<< HEAD

  exportCliente() {
    return this.http.get("http://localhost:8080/api/deliveries/export/excel", {responseType: "blob"});
  }
=======
>>>>>>> c8f55a2cd04139223e6a605b7995d0d9a641d53b
}
