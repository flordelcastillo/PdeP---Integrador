"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarTarea = exports.arrayTareas = void 0;
// Crear un arreglo vacío para almacenar las instancias de la clase Tarea
exports.arrayTareas = [];
// Función para agregar una nueva tarea al arreglo de tareas
function agregarTarea(nuevaTarea) {
    // Utiliza el método push para agregar la nueva tarea al final del arreglo
    exports.arrayTareas.push(nuevaTarea);
}
exports.agregarTarea = agregarTarea;
