"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTareas = void 0;
var main_1 = require("./main");
var menu_1 = require("./menu");
var mostrarMenuTareas_1 = require("./mostrarMenuTareas");
var arrayTareas_1 = require("./arrayTareas");
function buscarTareas() {
    console.clear(); // Limpia la consola.
    console.log("Introduce el título de una Tarea para buscarla:");
    var palabraClave = (0, main_1.leer)("> ");
    var tareasCoincidentes = arrayTareas_1.arrayTareas.filter(function (tarea) {
        return tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase());
    });
    switch (tareasCoincidentes.length) {
        case 0:
            console.log('No hay tareas relacionadas con la búsqueda.');
            (0, main_1.leer)("Presione cualquier tecla para continuar...");
            (0, menu_1.menuPrincipal)();
            break;
        default:
            (0, mostrarMenuTareas_1.mostrarTareas)(' relacionadas con la palabra' + palabraClave + ': ', tareasCoincidentes);
    }
}
exports.buscarTareas = buscarTareas;
