"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchDeMenu = exports.menuPrincipal = void 0;
var mostrarMenuTareas_1 = require("./mostrarMenuTareas");
var agregarTareas_1 = require("./agregarTareas");
var main_1 = require("./main");
function menuPrincipal() {
    console.clear();
    console.log("¿Qué deseas hacer?\n");
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
            //buscarTareas();
            break;
        case 3:
            (0, agregarTareas_1.agregarTareas)();
            break;
        case 0:
            process.exit(0);
        default:
            console.log("Opción Incorrecta!");
            menuPrincipal();
            break;
    }
}
exports.switchDeMenu = switchDeMenu;
