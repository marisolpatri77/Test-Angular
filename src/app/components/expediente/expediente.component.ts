import { Component } from '@angular/core';
import { Expediente } from '../../models/expediente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpedienteService } from '../../services/expediente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expediente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expediente.component.html',
  styleUrl: './expediente.component.css'
})
export class ExpedienteComponent {
  /*expediente!: Expediente; ! le esta diciendo a angular que la inicializacion la esta postergando para mas adelante*/

  expedientes!: Array<Expediente>; /*Esta variable esta bindeada en el formulario html */

 constructor( private expedienteService: ExpedienteService, /*Inyectar expediente service */
              private router: Router
 ){ 
  //this.expedientes = new Array<Expediente>();
  this.obtenerExpedientes(); /*Invocar el metodo para que se ejecute */
 }

 obtenerExpedientes() {
  this.expedientes = this.expedienteService.getExpedientes(); /*me devuelve y los guarda en la variable expediente los expedientes */
 }

 agregar(){
  //llamada a expediente-form
  this.router.navigate(['expediente-form',0]);
 }

 modificar(_id: string){
  this.router.navigate(['expediente-form', _id]);
 }

 
}
