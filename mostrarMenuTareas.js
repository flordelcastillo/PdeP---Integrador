"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarTareas = exports.mostrarMenuTareas = void 0;
var main_1 = require("./main");
var arrayTareas_1 = require("./arrayTareas");
var verDetallesTarea_1 = require("./verDetallesTarea");
function mostrarMenuTareas() {
    (0, main_1.borrarPantallayEncabezado)("  ¿Qué tareas deseas ver?");
    console.log("  [1] Todas.");
    console.log("  [2] Pendientes.");
    console.log("  [3] En curso.");
    console.log("  [4] Terminadas.");
    console.log("  [0] Volver");
    switchDeMostrarPorEstado((0, main_1.leer)("> "));
}
exports.mostrarMenuTareas = mostrarMenuTareas;
function switchDeMostrarPorEstado(opcion) {
    switch (Number(opcion)) {
        case 0:
            (0, main_1.volver)("");
            break;
        case 1:
            mostrarTareas(".", arrayTareas_1.arrayTareas);
            break;
        case 2:
            mostrarTareas(" pendientes.", filtrarPorEstado('pendiente'));
            break;
        case 3:
            mostrarTareas(" en curso.", filtrarPorEstado('en curso'));
            break;
        case 4:
            mostrarTareas(" terminadas.", filtrarPorEstado('terminada'));
            break;
        default:
            console.log("Opción Incorrecta!");
            mostrarMenuTareas();
            break;
    }
}
function filtrarPorEstado(estado) {
    return arrayTareas_1.arrayTareas.filter(function (tarea) { return tarea.estado === estado; });
}
function mostrarTareas(encabezado, tareasParaMostrar) {
    var arrayTarea = tareasParaMostrar;
    mostrarEncabezado(encabezado);
    vacioOmostrar(arrayTarea, encabezado);
}
exports.mostrarTareas = mostrarTareas;
function mostrarEncabezado(encabezado) {
    (0, main_1.borrarPantallayEncabezado)("Estas son todas tus tareas".concat(encabezado));
}
function vacioOmostrar(arrayTarea, encabezado) {
    switch (arrayTarea.length) {
        case 0:
            (0, main_1.volver)('No hay tareas disponibles.');
            break;
        default:
            arrayTarea.forEach(function (tarea, indice) {
                console.log("".concat(indice + 1, ".  ").concat(tarea.titulo));
            });
            preguntaIrDetalles(arrayTarea, encabezado);
            break;
    }
}
function preguntaIrDetalles(arrayTarea, encabezado) {
    console.log("\n¿Deseas ver los detalles de alguna?\nIntroduce el número para verlo o 0 para volver");
    volverOdetalles((0, main_1.leer)("> "), arrayTarea, encabezado);
}
function volverOdetalles(opcion, arrayTarea, encabezado) {
    switch (Number(opcion)) {
        case 0:
            (0, main_1.volver)("");
            break;
        default:
            var opcionNumero = parseInt(opcion, 10);
            if (!isNaN(opcionNumero) && opcionNumero >= 1 && opcionNumero <= arrayTarea.length) {
                (0, verDetallesTarea_1.verDetallesTareas)(arrayTarea[opcionNumero - 1]);
            }
            else {
                console.log("Opción Incorrecta! Por favor, ingresa un número válido.");
                mostrarTareas(encabezado, arrayTarea);
            }
            break;
    }
}
