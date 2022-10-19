import { Cliente } from './../../models/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:Router,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      CorreoElectronico:[''],
      contrasenia:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/Cliente")
    .subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.NombreUsuario === this.loginForm.value.NombreUsuario && a.CorreoElectronico === this.loginForm.value.CorreoElectronico
      })
    })

  }

}
