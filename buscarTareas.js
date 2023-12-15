"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTareas = void 0;
var main_1 = require("./main");
var arrayTareas_1 = require("./arrayTareas");
var mostrarMenuTareas_1 = require("./mostrarMenuTareas");
function mostrarBusquedas(tareasCoincidentes, palabraClave) {
    switch (tareasCoincidentes.length) {
        case 0:
            (0, main_1.volver)('No hay tareas relacionadas con la búsqueda.');
            break;
        default:
            (0, mostrarMenuTareas_1.mostrarTareas)(' relacionadas con la palabra' + palabraClave + ': ', tareasCoincidentes);
    }
}
function buscarTareas() {
    (0, main_1.borrarPantallayEncabezado)("Introduce el título de una Tarea para buscarla:");
    var palabraClave = (0, main_1.leer)("> ");
    var tareasCoincidentes = arrayTareas_1.arrayTareas.filter(function (tarea) {
        return tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase());
    });
    mostrarBusquedas(tareasCoincidentes, palabraClave);
}
exports.buscarTareas = buscarTareas;
