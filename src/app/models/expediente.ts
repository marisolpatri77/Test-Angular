export class Expediente {
    _id: string;
    numero: number;
    anio: number;
    descripcion: string;
    archivado: boolean;

    constructor() {
        this._id = '';
        this.numero = 0;
        this.anio = 0;
        this.descripcion = '';
        this.archivado = false;
    }
}
