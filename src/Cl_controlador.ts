import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_mRegistro from "./Cl_mRegistro.js";
import Cl_vRegistro from "./Cl_vRegistro.js";

export default class Cl_controlador {
  public modelo: Cl_mRegistro;
  public vista: Cl_vRegistro;
  constructor(modelo: Cl_mRegistro, vista: Cl_vRegistro) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarEstudiante({
    estudianteData,
    callback,
  }: {
    estudianteData: iEstudiante;
    callback: Function;
  }): void {
    this.modelo.agregarEstudiante({
      estudiante: new Cl_mEstudiante(estudianteData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  estudiantesRegistrados(): iEstudiante[] {
    return this.modelo.listar();
  }
}