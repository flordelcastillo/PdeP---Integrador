"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchDeMenu = exports.menuPrincipal = void 0;
var main_1 = require("./main");
var mostrarMenuTareas_1 = require("./mostrarMenuTareas");
var agregarTareas_1 = require("./agregarTareas");
var buscarTareas_1 = require("./buscarTareas");
function menuPrincipal() {
    (0, main_1.borrarPantallayEncabezado)("¿Qué deseas hacer?");
    console.log("  [1] Ver mis tareas.");
    console.log("  [2] Buscar una tarea.");
    console.log("  [3] Agregar una tarea.");
    console.log("  [0] Salir.");
    switchDeMenu((0, main_1.leer)("> "));
}
exports.menuPrincipal = menuPrincipal;
function switchDeMenu(opcion) {
    switch (Number(opcion)) {
        case 1:
            (0, mostrarMenuTareas_1.mostrarMenuTareas)();
            break;
        case 2:
            (0, buscarTareas_1.buscarTareas)();
            break;
        case 3:
            (0, agregarTareas_1.agregarTareas)();
            break;
        case 0:
            process.exit(0);
        default:
            (0, main_1.volver)("Opción Incorrecta!");
            break;
    }
}
exports.switchDeMenu = switchDeMenu;
