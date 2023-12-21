"use strict";
/**
 * Programación Estructurada: Este código sigue un enfoque estructurado al organizar funciones de manera clara y
 * utilizar estructuras de control como switch. La función menuPrincipal presenta opciones, y switchDeMenu
 * maneja la lógica de control de flujo.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchDeMenu = exports.menuPrincipal = void 0;
// Importar funciones necesarias desde otros archivos
var extra_1 = require("./extra");
var mostrarMenuTareas_1 = require("./mostrarMenuTareas");
var agregarTareas_1 = require("./agregarTareas");
var buscarTareas_1 = require("./buscarTareas");
// Función para mostrar el menú principal de la aplicación
function menuPrincipal() {
    // Borra la pantalla y muestra un encabezado con las opciones disponibles
    (0, extra_1.borrarPantallayEncabezado)("¿Qué deseas hacer?");
    // Muestra las opciones disponibles en el menú principal
    console.log("  [1] Ver mis tareas.");
    console.log("  [2] Buscar una tarea.");
    console.log("  [3] Agregar una tarea.");
    console.log("  [0] Salir.");
    // Llama a la función switchDeMenu para manejar la opción ingresada por el usuario
    switchDeMenu((0, extra_1.leer)("> "));
}
exports.menuPrincipal = menuPrincipal;
// Función para manejar las opciones del menú principal
function switchDeMenu(opcion) {
    // Utiliza un switch para manejar diferentes casos basados en la opción ingresada
    switch (Number(opcion)) {
        case 1:
            // Si la opción es 1, llama a la función para mostrar el menú de tareas existentes
            (0, mostrarMenuTareas_1.mostrarMenuTareas)();
            break;
        case 2:
            // Si la opción es 2, llama a la función para buscar tareas
            (0, buscarTareas_1.buscarTareas)();
            break;
        case 3:
            // Si la opción es 3, llama a la función para agregar una nueva tarea
            (0, agregarTareas_1.agregarTareas)();
            break;
        case 0:
            // Si la opción es 0, termina el proceso de la aplicación
            process.exit(0);
        default:
            // Si la opción no es válida, muestra un mensaje de error y vuelve al menú principal
            (0, extra_1.volver)("Opción Incorrecta!");
            break;
    }
}
exports.switchDeMenu = switchDeMenu;
