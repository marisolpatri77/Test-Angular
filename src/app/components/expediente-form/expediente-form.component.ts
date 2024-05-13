import { Component } from '@angular/core';
import { Expediente } from '../../models/expediente';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedienteService } from '../../services/expediente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expediente-form',
  standalone: true,
  imports: [FormsModule, CommonModule], //FormModule es para manejar formularioa
  templateUrl: './expediente-form.component.html',
  styleUrl: './expediente-form.component.css'
})
export class ExpedienteFormComponent {
  expediente!: Expediente;
  accion: string="new";

  constructor( private activatedRoute: ActivatedRoute,
                private expedienteService: ExpedienteService,
                private router:Router
  ){
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => { /*activatedRouter es un objeto q  me maneja la ruta acitva en este ej es expediente-form/1 captura y hace algo*/ 
      if (params['id'] == "0"){
        this.accion = "new";
        this.iniciarVariable();
      }else{
        this.accion = "update";
        this.cargarExpediente(params['id']);
      }
    });
  }

  iniciarVariable(): void {
    this.expediente = new Expediente(); /*instanciar*/
   }

   registrar():void{
    console.log(this.expediente);
    this.expedienteService.add(this.expediente);
    this.expediente = new Expediente(); /*con esta linea de cod se inicializaron los atributos que estan bindeados en el form por eso el form se inicializa*/
    this.router.navigate(['expediente']);
   }

   cargarExpediente(id:string):void{
    this.expediente = this.expedienteService.getExpedienteById(id);
   }

   actualizar(){
    //llamar al service para actualizar el expediente modificado
   }
}
