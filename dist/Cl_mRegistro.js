import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251110-2150";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_mRegistro {
    constructor() {
        this.registro = [];
        this.tbRegistro = "Mi.Registro.v01";
        this.db = new Cl_dcytDb({ aliasCuenta: "CODEBREAKERS" });
    }
    agregarEstudiante({ estudiante, callback, }) {
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
                if (!error)
                    this.llenarAgenda(objects);
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    cargar(callback) {
        // Obtener los contactos desde la Web Storage
        this.db.listRecords({
            tabla: this.tbRegistro,
            callback: ({ objects, error }) => {
                if (!error)
                    this.llenarAgenda(objects || []);
                callback(false);
            },
        });
    }
    llenarAgenda(registro) {
        this.registro = [];
        registro.map((estudiante) => this.registro.push(new Cl_mEstudiante(estudiante)));
    }
    listar() {
        return this.registro.map((estudiante) => estudiante.toJSON());
    }
}
