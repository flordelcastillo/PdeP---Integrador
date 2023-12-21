"use strict";
/**
 * Programación Orientada a Objetos: La función editarTarea opera principalmente
 * en instancias de la clase Tarea y utiliza el método editar.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = void 0;
/**
 * Programación Funcional: La función utiliza funciones importadas (leer, volver) que pueden considerarse
 * parte de un enfoque funcional. Además, se emplea la función pedirEstado que realiza una operación simple y pura.
 * */
/**
 * Programación Estructurada: La estructura general del código sigue un enfoque estructurado,
 * con funciones que realizan tareas específicas y la secuencia de operaciones claramente definida.
 * */
// Importar funciones necesarias desde el archivo "extra" y otras dependencias
var extra_1 = require("./extra");
var agregarTareas_1 = require("./agregarTareas");
// Función para solicitar y retornar el estado de la tarea desde el usuario
function pedirEstado() {
    // Utiliza la función leer del archivo "extra" para obtener el estado desde el usuario,
    // y lo convierte a minúsculas para manejar entradas en mayúsculas o minúsculas
    var estado = (0, extra_1.leer)("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toLowerCase();
    return estado;
}
// Función principal para editar una tarea existente
function editarTarea(tarea) {
    // Borra la pantalla y muestra un encabezado informativo sobre la tarea en edición
    (0, extra_1.borrarPantallayEncabezado)("Est\u00E1s editando la tarea ".concat(tarea.titulo, ".\n"));
    // Proporciona instrucciones al usuario sobre cómo realizar la edición
    console.log("- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.\n");
    // Utiliza el método editar de la tarea para actualizar sus atributos con los datos proporcionados por el usuario
    tarea.editar((0, agregarTareas_1.pedirDescripcion)(), pedirEstado(), (0, agregarTareas_1.pedirDificultad)());
    // Muestra un mensaje de éxito al usuario
    (0, extra_1.volver)("\n¡Datos guardados!\n");
}
exports.editarTarea = editarTarea;
