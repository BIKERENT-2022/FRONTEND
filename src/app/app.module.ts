import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AceptarSolicitudComponent } from './components/aceptar-solicitud/aceptar-solicitud.component';
import { ClientesPremiumComponent } from './components/clientes-premium/clientes-premium.component';
import { PerfilPremiumComponent } from './components/perfil-premium/perfil-premium.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { BicicletasComponent } from './components/bicicletas/bicicletas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PlanBasicComponent } from './components/plan-basic/plan-basic.component';
import { InfoBasicComponent } from './components/info-basic/info-basic.component';
import { InfoPremiumComponent } from './components/info-premium/info-premium.component';
import { PagoBasicComponent } from './components/pago-basic/pago-basic.component';
import { PagoPremiumComponent } from './components/pago-premium/pago-premium.component';
import { SolicitudTarjetaComponent } from './components/solicitud-tarjeta/solicitud-tarjeta.component';
import { PerfilEmpresasComponent } from './components/perfil-empresas/perfil-empresas.component';
import { ConfirmarInformacionComponent } from './components/confirmar-informacion/confirmar-informacion.component';
import { NotificacionesEmpresasComponent } from './components/notificaciones-empresas/notificaciones-empresas.component';
import { AlquilerEmpresasComponent } from './components/alquiler-empresas/alquiler-empresas.component';
import { EmpresasPerfilComponent } from './components/empresas-perfil/empresas-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SolicitudesComponent,
    AceptarSolicitudComponent,
    ClientesPremiumComponent,
    PerfilPremiumComponent,
    HomeComponent,
    BicicletasComponent,
    RegistroComponent,
    CambiarContrasenaComponent,
    NotificacionesComponent,
    HistorialComponent,
    PlanBasicComponent,
    InfoBasicComponent,
    InfoPremiumComponent,
    PagoBasicComponent,
    PagoPremiumComponent,
    SolicitudTarjetaComponent,
    PerfilEmpresasComponent,
    ConfirmarInformacionComponent,
    NotificacionesEmpresasComponent,
    AlquilerEmpresasComponent,
    EmpresasPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
