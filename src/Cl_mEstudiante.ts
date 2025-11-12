export interface iEstudiante {
  ID : string;
  nombre: string;
  asignatura: string;
}
export default class Cl_mEstudiante {
  private _ID : string = "" ;
  private _nombre: string = "";
  private _asignatura: string = "";
  constructor({ 
    ID,
    nombre,
    asignatura 
    }:
    {
    ID : string;
    nombre: string;
    asignatura: string;
    }) {
    this.ID = ID;
    this.nombre = nombre;
    this.asignatura = asignatura;
  } 
set ID(ID: string) {
    this._ID = ID.trim().toLowerCase();
  }
get ID(): string {
    return this._ID;
  }
set nombre(nombre: string) {
    this._nombre = nombre.trim().toLowerCase();
  }
get nombre(): string {
    return this._nombre;
  }
set asignatura(asignatura: string) {
    this._asignatura = asignatura.trim().toLowerCase();
  }
get asignatura(): string {
    return this._asignatura;
  }
  error (): string | false {
    if (
        this.ID.length !== 8 || // 30111222
        isNaN(parseInt(this.ID))
    ) {
      return "El ID debe tener exactamente 8 caracteres.";
    }
    if (this.nombre.length === 0) {
      return "El nombre no puede estar vacío.";
    }
    const asignatura = ["matematicas", "lengua", "ciencias", "historia", "geografia"];
    if (!asignatura.includes(this.asignatura.toLowerCase())) {
      return `La asignatura debe ser una de las siguientes: ${asignatura.join(", ")}.`;
    }
    return false;
  } 

  toJSON(): iEstudiante {
    return {
      ID: this.ID,
      nombre: this.nombre,
      asignatura: this.asignatura,
    };
  }
}