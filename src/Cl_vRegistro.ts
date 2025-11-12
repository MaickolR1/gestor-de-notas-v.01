import { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vAgenda extends Cl_vGeneral {
  private btAgregarEstudiante: HTMLButtonElement;
  private divEstudiantesRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "Registro" });
    this.btAgregarEstudiante = this.crearHTMLButtonElement("btAgregarEstudiante", {
      onclick: () => this.agregarEstudiante(),
    });
    this.divEstudiantesRegistrados = this.crearHTMLElement(
      "divEstudiantesRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.mostrarGruposRegistrados(),
      }
    ) as HTMLDivElement;
  }
  mostrarGruposRegistrados() {
    this.divEstudiantesRegistrados.innerHTML = "";
    let registro = this.controlador?.estudiantesRegistrados();
    if (!registro) return;
    registro.forEach((estudiante: iEstudiante) => {
      this.divEstudiantesRegistrados.innerHTML += `<tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.ID}</td>
            <td>${estudiante.asignatura}</td>
        </tr>`;
    });
  }
  agregarEstudiante() {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    if (!nombre) return;
    let ID = prompt("Ingrese el ID:");
    if (!ID) return;
    let asignatura = prompt("Ingrese la asignatura:");
    if (!asignatura) return;
    this.controlador!.agregarEstudiante({
      estudianteData: {
        nombre: nombre,
        ID: ID,
        asignatura: asignatura,
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}