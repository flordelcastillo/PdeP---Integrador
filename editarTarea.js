"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = void 0;
// Importar funciones necesarias desde el archivo "main" y otras dependencias
var main_1 = require("./main");
var agregarTareas_1 = require("./agregarTareas");
// Función para solicitar y retornar el estado de la tarea desde el usuario
function pedirEstado() {
    // Utiliza la función leer del archivo "main" para obtener el estado desde el usuario,
    // y lo convierte a minúsculas para manejar entradas en mayúsculas o minúsculas
    var estado = (0, main_1.leer)("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toLowerCase();
    return estado;
}
// Función principal para editar una tarea existente
function editarTarea(tarea) {
    // Borra la pantalla y muestra un encabezado informativo sobre la tarea en edición
    (0, main_1.borrarPantallayEncabezado)("Est\u00E1s editando la tarea ".concat(tarea.titulo, ".\n"));
    // Proporciona instrucciones al usuario sobre cómo realizar la edición
    console.log("- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.\n");
    // Utiliza el método editar de la tarea para actualizar sus atributos con los datos proporcionados por el usuario
    tarea.editar((0, agregarTareas_1.pedirDescripcion)(), pedirEstado(), (0, agregarTareas_1.pedirDificultad)());
    // Muestra un mensaje de éxito al usuario
    (0, main_1.volver)("\n¡Datos guardados!\n");
}
exports.editarTarea = editarTarea;
