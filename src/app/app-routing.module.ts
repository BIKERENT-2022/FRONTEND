import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AceptarSolicitudComponent } from './components/aceptar-solicitud/aceptar-solicitud.component';
import { ClientesPremiumComponent } from './components/clientes-premium/clientes-premium.component';
import { PerfilPremiumComponent } from './components/perfil-premium/perfil-premium.component';
import { HomeComponent } from './components/home/home.component';
import { BicicletasComponent } from './components/bicicletas/bicicletas.component';

const routes: Routes = [

  
  {path:"login",component:LoginComponent},
  {path:"Home",component:HomeComponent},
  {path:"ClientesPremium",component:ClientesPremiumComponent},
  {path:"AceptarSolicitud",component:AceptarSolicitudComponent},
  {path:"PerfilPremium",component:PerfilPremiumComponent},
  {path:"Solicitudes",component:SolicitudesComponent},
  {path:"Bicicletas",component:BicicletasComponent},
  {path:"Registrate",component:RegistroComponent},
  {path:"CambiarContrasenia",component:BicicletasComponent},
  {path:"Historial",component:BicicletasComponent},
  {path:"",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
