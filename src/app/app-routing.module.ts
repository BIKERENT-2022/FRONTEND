import { RepartidoresComponent } from './components/repartidores/repartidores.component';
import { PerfilEmpresasComponent } from './components/perfil-empresas/perfil-empresas.component';
import { HistorialAlqEmpresasComponent } from './components/historial-alq-empresas/historial-alq-empresas.component';
import { HomeEmpresaComponent } from './components/home-empresa/home-empresa.component';
import { NavbarEmpresaComponent } from './components/navbar-empresa/navbar-empresa.component';
import { PagoPlanComponent } from './components/pago-plan/pago-plan.component';
import { ConfirmarInformacionComponent } from './components/confirmar-informacion/confirmar-informacion.component';
import { CondicionesEmpresaComponent } from './components/condiciones-empresa/condiciones-empresa.component';
import { RegistrarOModificarComponent } from './components/registrar-o-modificar/registrar-o-modificar.component';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';
import { VerPedidoComponent } from './components/ver-pedido/ver-pedido.component';
import { PedidosActivosComponent } from './components/pedidos-activos/pedidos-activos.component';
import { AlquilerRealizadoComponent } from './components/alquiler-realizado/alquiler-realizado.component';
import { FinalizarAlquilerComponent } from './components/finalizar-alquiler/finalizar-alquiler.component';
import { SearchComponent } from './components/search/search.component';
import { RegistrarUbicacionCincoComponent } from './components/registrar-ubicacion-cinco/registrar-ubicacion-cinco.component';
import { RegistrarUbicacionCuatroComponent } from './components/registrar-ubicacion-cuatro/registrar-ubicacion-cuatro.component';
import { MinibmxCComponent } from './components/minibmx-c/minibmx-c.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { HistorialComponent } from './components/historial/historial.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { RegistrarUbicacionUnoComponent } from './components/registrar-ubicacion-uno/registrar-ubicacion-uno.component';
import { AfiliarTarjetaComponent } from './components/afiliar-tarjeta/afiliar-tarjeta.component';
import { PagoBasicComponent } from './components/pago-basic/pago-basic.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AceptarSolicitudComponent } from './components/aceptar-solicitud/aceptar-solicitud.component';
import { ClientesPremiumComponent } from './components/clientes-premium/clientes-premium.component';
import { PerfilPremiumComponent } from './components/perfil-premium/perfil-premium.component';
import { PagoPremiumComponent } from './components/pago-premium/pago-premium.component';
import { BicicletasComponent } from './components/bicicletas/bicicletas.component';
import { CondicionesBasicComponent } from './components/condiciones-basic/condiciones-basic.component';
import { SolicitudTarjetaComponent } from './components/solicitud-tarjeta/solicitud-tarjeta.component';
import { PlanBasicComponent } from './components/plan-basic/plan-basic.component';

const routes: Routes = [  
  {path:"login",component:LoginComponent},
  {path:"Registrate",component:RegistroComponent},
  {path:"Condicionesbasic",component:CondicionesBasicComponent},
  {path:"pagobasic",component:PagoBasicComponent},  
  {path:"pagopremium",component:PagoPremiumComponent},
  {path:"afiliarTarjeta",component:AfiliarTarjetaComponent},
  {path:"RegistrarUbicacionUno",component:RegistrarUbicacionUnoComponent},
  {path:"RegistrarUbicacionCuatro",component:RegistrarUbicacionCuatroComponent},
  {path:"RegistrarUbicacionCinco",component:RegistrarUbicacionCincoComponent},
  {path:"search",component:SearchComponent},
  {path:"finalizarAlquiler",component:FinalizarAlquilerComponent},
  {path:"AlquilerRealizado",component:AlquilerRealizadoComponent},
  {path:"notificaciones",component:NotificacionesComponent},
  {path:"pedidosActivos",component:PedidosActivosComponent},
  {path:"verPedido",component:VerPedidoComponent},
  {path:"cambiarContrasenia",component:CambiarContrasenaComponent},
  {path:"home",component:HomeComponent},
  {path:"Bicicletas",component:BicicletasComponent},
  {path:"notificaciones",component:NotificacionesComponent},
  {path:"historial",component:HistorialComponent},
  {path:"verPerfil",component:VerPerfilComponent},
  {path:"carrito",component:CarritoComponent},
  {path:"minibmxx",component:MinibmxCComponent},
  {path:"ClientesPremium",component:ClientesPremiumComponent},
  {path:"AceptarSolicitud",component:AceptarSolicitudComponent},
  {path:"PerfilPremium",component:PerfilPremiumComponent},
  {path:"Solicitudes",component:SolicitudesComponent},
  {path:"resmod",component:RegistrarOModificarComponent},
  {path:"condicionesEmpresa",component:CondicionesEmpresaComponent},
  {path:"Homee",component:HomeEmpresaComponent},
  {path:"pagoPlan",component:PagoPlanComponent},
  {path:"historialEmp",component:HistorialAlqEmpresasComponent},
  {path:"perfilEmpresas",component:PerfilEmpresasComponent},
  {path:"perfilpremium",component:PerfilPremiumComponent},
  {path:"repartidores",component:RepartidoresComponent},
  {path:"alquilerRealizado",component:AlquilerRealizadoComponent},
  {path: "solicitud-tarjeta",component:SolicitudTarjetaComponent},
  {path: "plan-basic", component:PlanBasicComponent},
  {path:"",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
