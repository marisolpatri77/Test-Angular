import { Injectable } from '@angular/core';
import { Expediente } from '../models/expediente';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  expedientes!: Array<Expediente>;

  constructor() { 

    this.expedientes = [
      {
        _id: "1",
        numero: 54654,
        anio: 2024,
        descripcion: "Referente a herencia Flia. Zubieta",
        archivado: false
      }
    ]; /*se agrega al array un elemento explicitamente*/


    let e = new Expediente();
    e._id = "2";
    e.numero = 10;
    e.anio = 2020;
    e.descripcion = "Conflicto vecinal Sr. Torres con Sr. Sajama";
    e.archivado = true;
    this.expedientes.push(e); /*se agrega otro elemento al array*/ 
  }

  //CRUD

  add(expediente: Expediente): void {
    this.expedientes.push(expediente);
  }

  update(): void {
  }

  getExpedientes():Array<Expediente> {
    return this.expedientes;
  }

  getExpedienteById(id:string): Expediente {
    let expediente = new Expediente();
    //logica para recuperar expediente con el id del parametro
    let indexExpediente: number = this.expedientes.findIndex( exp => (exp._id == id));
    expediente = this.expedientes[indexExpediente];
    return expediente; /*Analizar este código*/
  }

  deleteExpediente(id:string): void {
    //logica para eliminar expediente con el id del parametro
  }

}
