import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarEstudiante({ estudianteData, callback, }) {
        this.modelo.agregarEstudiante({
            estudiante: new Cl_mEstudiante(estudianteData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    estudiantesRegistrados() {
        return this.modelo.listar();
    }
}
