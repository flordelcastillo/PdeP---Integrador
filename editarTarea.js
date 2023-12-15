"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = void 0;
var main_1 = require("./main");
var agregarTareas_1 = require("./agregarTareas");
function pedirEstado() {
    var estado = (0, main_1.leer)("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toLowerCase();
    return estado;
}
function editarTarea(tarea) {
    (0, main_1.borrarPantallayEncabezado)("Estás editando la tarea ${tarea.titulo}.\n");
    console.log("- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.\n");
    tarea.editar((0, agregarTareas_1.pedirDescripcion)(), pedirEstado(), (0, agregarTareas_1.pedirDificultad)());
    (0, main_1.volver)("\n¡Datos guardados!\n");
}
exports.editarTarea = editarTarea;
