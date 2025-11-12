import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vAgenda extends Cl_vGeneral {
    constructor() {
        super({ formName: "Registro" });
        this.btAgregarEstudiante = this.crearHTMLButtonElement("btAgregarEstudiante", {
            onclick: () => this.agregarEstudiante(),
        });
        this.divEstudiantesRegistrados = this.crearHTMLElement("divEstudiantesRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarGruposRegistrados(),
        });
    }
    mostrarGruposRegistrados() {
        var _a;
        this.divEstudiantesRegistrados.innerHTML = "";
        let registro = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.estudiantesRegistrados();
        if (!registro)
            return;
        registro.forEach((estudiante) => {
            this.divEstudiantesRegistrados.innerHTML += `<tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.ID}</td>
            <td>${estudiante.asignatura}</td>
        </tr>`;
        });
    }
    agregarEstudiante() {
        let nombre = prompt("Ingrese el nombre del estudiante:");
        if (!nombre)
            return;
        let ID = prompt("Ingrese el ID:");
        if (!ID)
            return;
        let asignatura = prompt("Ingrese la asignatura:");
        if (!asignatura)
            return;
        this.controlador.agregarEstudiante({
            estudianteData: {
                nombre: nombre,
                ID: ID,
                asignatura: asignatura,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
