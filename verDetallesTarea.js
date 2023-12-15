"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verDetallesTareas = void 0;
var main_1 = require("./main");
var editarTarea_1 = require("./editarTarea");
function mostrarEstrellas(dificultad) {
    switch (dificultad) {
        case "fácil":
            console.log("  Dificultad:  ★☆☆");
            break;
        case "medio":
            console.log("  Dificultad:  ★★☆");
            break;
        case "difícil":
            console.log("  Dificultad:  ★★★");
            break;
    }
}
function editarOvolver(tarea) {
    console.log("Si deseas editarla, presiona E, o presiona 0 para volver al menú principal");
    var opcion = (0, main_1.leer)("> ");
    switch (opcion.toUpperCase()) {
        case 'E':
            (0, editarTarea_1.editarTarea)(tarea);
            break;
        case '0':
            (0, main_1.volver)("");
            break;
        default:
            (0, main_1.leer)("Opción Incorrecta!\nPresione enter para continuar...");
            verDetallesTareas(tarea);
            break;
    }
}
function verDetallesTareas(tarea) {
    (0, main_1.borrarPantallayEncabezado)("Esta es la tarea que elegiste.");
    console.log("  ".concat(tarea.titulo)); // Muestra el título de la tarea.
    console.log("  ".concat(tarea.descripcion ? tarea.descripcion : '')); // Muestra la descripción si está disponible.
    console.log("  Estado:      ".concat(tarea.estado)); // Muestra el estado de la tarea.
    mostrarEstrellas(tarea.dificultad);
    console.log("  Creaci\u00F3n:    ".concat(tarea.fechaCreacion)); // Muestra la fecha de creación de la tarea.
    editarOvolver(tarea);
}
exports.verDetallesTareas = verDetallesTareas;
