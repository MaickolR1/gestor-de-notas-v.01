import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251110-2150";
import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante";

interface iResultObjects {
    objects: [iEstudiante] | null;
    error: string | false;
}

export default class Cl_mRegistro {
  private registro: Cl_mEstudiante[] = [];
  private db: Cl_dcytDb;
  readonly tbRegistro: string = "Mi.Registro.v01";

  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "CODEBREAKERS" });
  }
  agregarEstudiante({
    estudiante,
    callback,
  }: {
    estudiante: Cl_mEstudiante;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el estudiante no tenga errores
    let error = estudiante.error();
    if (error) {
      callback(error);
      return;
    }
    // Validar que no se repita el ID
    let existe = this.registro.find((c) => c.ID === estudiante.ID);
    if (existe) {
      callback("Ya existe un estudiante con el mismo ID.");
      return;
    }
    // Agregar el estudiante a la Web Storage
    this.db.addRecord({
  tabla: this.tbRegistro,
  object: estudiante.toJSON(),
  callback: ({ id, objects, error }) => {
    if (!error) this.llenarAgenda(objects);
    callback?.(error);
  },
    });
  }
  cargar(callback: (error: string | false) => void): void {
    // Obtener los contactos desde la Web Storage
    this.db.listRecords({
      tabla: this.tbRegistro,
      callback: ({ objects, error }: iResultObjects) => {
        if (!error) this.llenarAgenda(objects || []);
        callback(false);
      },
    });
  }
  llenarAgenda(registro: iEstudiante[]) {
    this.registro = [];
    registro.map((estudiante) => this.registro.push(new Cl_mEstudiante(estudiante)));
  }
  listar(): iEstudiante[] {
    return this.registro.map((estudiante) => estudiante.toJSON());
  }
}