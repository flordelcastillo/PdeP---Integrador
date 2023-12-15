"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verDetallesTareas = void 0;
// Importar funciones necesarias desde otros archivos
var extra_1 = require("./extra");
var editarTarea_1 = require("./editarTarea");
// Función para mostrar el nivel de dificultad de una tarea en forma de estrellas
function mostrarEstrellas(dificultad) {
    // Utiliza un switch para imprimir el nivel de dificultad en forma de estrellas
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
// Función para editar la tarea o volver al menú principal
function editarOvolver(tarea) {
    // Solicita al usuario elegir entre editar la tarea o volver al menú principal
    console.log("Si deseas editarla, presiona E, o presiona 0 para volver al menú principal");
    var opcion = (0, extra_1.leer)("> ");
    // Utiliza un switch para manejar las opciones del usuario
    switch (opcion.toUpperCase()) {
        case 'E':
            // Llama a la función de edición de tarea
            (0, editarTarea_1.editarTarea)(tarea);
            break;
        case '0':
            // Vuelve al menú principal
            (0, extra_1.volver)("");
            break;
        default:
            // Maneja una opción incorrecta mostrando un mensaje y volviendo a mostrar los detalles de la tarea
            (0, extra_1.leer)("Opción Incorrecta!\nPresione enter para continuar...");
            verDetallesTareas(tarea);
            break;
    }
}
// Función principal para mostrar los detalles de una tarea
function verDetallesTareas(tarea) {
    // Borra la pantalla y muestra un encabezado informativo
    (0, extra_1.borrarPantallayEncabezado)("Esta es la tarea que elegiste.");
    // Muestra diferentes detalles de la tarea utilizando console.log
    console.log("  ".concat(tarea.titulo)); // Muestra el título de la tarea.
    console.log("  ".concat(tarea.descripcion ? tarea.descripcion : '')); // Muestra la descripción si está disponible.
    console.log("  Estado:      ".concat(tarea.estado)); // Muestra el estado de la tarea.
    // Muestra el nivel de dificultad en forma de estrellas utilizando la función anterior
    mostrarEstrellas(tarea.dificultad);
    console.log("  Creaci\u00F3n:    ".concat(tarea.fechaCreacion)); // Muestra la fecha de creación de la tarea.
    // Llama a la función para editar la tarea o volver al menú principal
    editarOvolver(tarea);
}
exports.verDetallesTareas = verDetallesTareas;
