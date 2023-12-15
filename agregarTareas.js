"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarTareas = exports.pedirDificultad = exports.pedirDescripcion = void 0;
var main_1 = require("./main");
var arrayTareas_1 = require("./arrayTareas");
var Tarea_1 = require("./Tarea");
function pedirTitulo() {
    var titulo = (0, main_1.leer)("1. Ingresa el Título: ");
    return titulo;
}
function pedirDescripcion() {
    var descripcion = (0, main_1.leer)("2. Ingresa la descripción: ");
    return descripcion;
}
exports.pedirDescripcion = pedirDescripcion;
function pedirEstado() {
    var estado = (0, main_1.leer)("3. Estado ([P]endiente / [E]n curso): ").toLowerCase();
    return estado;
}
function pedirDificultad() {
    var dificultad = (0, main_1.leer)("4. Dificultad ([F]ácil / [M]edio / [D]ificil): ").toLowerCase();
    return dificultad;
}
exports.pedirDificultad = pedirDificultad;
function agregarTareas() {
    console.clear();
    var nuevaTarea = new Tarea_1.Tarea(pedirTitulo(), pedirDescripcion(), pedirEstado(), pedirDificultad());
    (0, arrayTareas_1.agregarTarea)(nuevaTarea);
    (0, main_1.volver)("¡Datos guardados!");
}
exports.agregarTareas = agregarTareas;
