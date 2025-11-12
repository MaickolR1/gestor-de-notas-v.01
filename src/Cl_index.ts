/****Necesitamos un sistema informático sencillo y eficiente para llevar el registro, cálculo y consulta de las notas de nuestros estudiantes. 
 * El sistema debe ser intuitivo para que el personal administrativo y los profesores puedan utilizarlo sin problemas.
El programa, al que llamaremos "Gestor de Calificaciones Académicas", debe ser capaz de realizar las siguientes tareas clave:
    1. ​Registro de Estudiantes: 
        ◦ ​Permitir ingresar y almacenar la información básica de cada estudiante (ID único, Nombre Completo, Grado/Curso).
    2. ​Registro de Asignaturas y Actividades Evaluables: 
        ◦ ​Permitir definir las asignaturas para cada curso.
        ◦ ​Permitir ingresar múltiples notas o actividades evaluables por asignatura (ej. Examen 1, Tarea, Proyecto Final).
        ◦ ​Cada actividad debe tener un porcentaje de ponderación sobre la nota final de la asignatura.
    3. ​Ingreso y Modificación de Notas: 
        ◦ ​Facilitar la entrada de las calificaciones para cada actividad por estudiante.
        ◦ ​Permitir la modificación de una nota en caso de error o revisión.
    4. ​Cálculo Automático de la Nota Final: 
        ◦ ​El sistema debe calcular automáticamente la nota final de la asignatura para cada estudiante, aplicando las ponderaciones definidas.
        ◦ ​Debe mostrar claramente la nota final, la nota mínima de aprobación (ej. 70/100 o 3/5, configurable), y si el estudiante Aprobó o Reprobó.
    5. ​Consulta y Reportes: 
        ◦ ​Generar un reporte por estudiante que muestre todas sus notas por asignatura y su promedio final.
        ◦ ​Generar un listado general por curso con la nota final de todos los estudiantes en una asignatura específica.Necesitamos un sistema informático sencillo y eficiente para llevar el registro, cálculo y consulta de las notas de nuestros estudiantes. El sistema debe ser intuitivo para que el personal administrativo y los profesores puedan utilizarlo sin problemas.
El programa, al que llamaremos "Gestor de Calificaciones Académicas", debe ser capaz de realizar las siguientes tareas clave:
    1. ​Registro de Estudiantes: 
        ◦ ​Permitir ingresar y almacenar la información básica de cada estudiante (ID único, Nombre Completo, Grado/Curso).
    2. ​Registro de Asignaturas y Actividades Evaluables: 
        ◦ ​Permitir definir las asignaturas para cada curso.
        ◦ ​Permitir ingresar múltiples notas o actividades evaluables por asignatura (ej. Examen 1, Tarea, Proyecto Final).
        ◦ ​Cada actividad debe tener un porcentaje de ponderación sobre la nota final de la asignatura.
    3. ​Ingreso y Modificación de Notas: 
        ◦ ​Facilitar la entrada de las calificaciones para cada actividad por estudiante.
        ◦ ​Permitir la modificación de una nota en caso de error o revisión.
    4. ​Cálculo Automático de la Nota Final: 
        ◦ ​El sistema debe calcular automáticamente la nota final de la asignatura para cada estudiante, aplicando las ponderaciones definidas.
        ◦ ​Debe mostrar claramente la nota final, la nota mínima de aprobación (ej. 70/100 o 3/5, configurable), y si el estudiante Aprobó o Reprobó.
    5. ​Consulta y Reportes: 
        ◦ ​Generar un reporte por estudiante que muestre todas sus notas por asignatura y su promedio final.
        ◦ ​Generar un listado general por curso con la nota final de todos los estudiantes en una asignatura específica.****/

import Cl_controlador from "./Cl_controlador.js";
import Cl_mRegistro from "./Cl_mRegistro.js";
import Cl_vRegistro from "./Cl_vRegistro.js";


export default class Cl_index {
  constructor() {
    let modelo = new Cl_mRegistro();
    modelo.cargar((error: string | false) => {
      if (error) alert(error);
      if (error) throw new Error(error);
      let vista = new Cl_vRegistro();
      let controlador = new Cl_controlador(modelo, vista);
      vista.controlador = controlador;
      vista.refresh();
    });
  }
}