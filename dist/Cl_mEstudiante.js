export default class Cl_mEstudiante {
    constructor({ ID, nombre, asignatura }) {
        this._ID = "";
        this._nombre = "";
        this._asignatura = "";
        this.ID = ID;
        this.nombre = nombre;
        this.asignatura = asignatura;
    }
    set ID(ID) {
        this._ID = ID.trim().toLowerCase();
    }
    get ID() {
        return this._ID;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toLowerCase();
    }
    get nombre() {
        return this._nombre;
    }
    set asignatura(asignatura) {
        this._asignatura = asignatura.trim().toLowerCase();
    }
    get asignatura() {
        return this._asignatura;
    }
    error() {
        if (this.ID.length !== 8 || // 30111222
            isNaN(parseInt(this.ID))) {
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
    toJSON() {
        return {
            ID: this.ID,
            nombre: this.nombre,
            asignatura: this.asignatura,
        };
    }
}
