"use strict";
/**
 * Programación Estructurada: La función agregarTareas sigue un flujo estructurado y
 * utiliza funciones auxiliares para solicitar información al usuario.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarTareas = exports.pedirDificultad = exports.pedirDescripcion = void 0;
/**
 * Programación Funcional: Las funciones pedirTitulo y pedirDescripcion son funciones puras,
 * ya que toman un input y devuelven un output sin realizar efectos secundarios.
 * */
/**
 * Programación Orientada a Objetos: Se utiliza la clase Tarea para crear instancias de tareas
 * y gestionar la información relacionada con ellas.
 * */
// Importar funciones y clases necesarias desde otros archivos
var extra_1 = require("./extra");
var arrayTareas_1 = require("./arrayTareas");
var Tarea_1 = require("./Tarea");
// Función para solicitar y retornar el título de la tarea desde el usuario
function pedirTitulo() {
    var titulo = (0, extra_1.leer)("1. Ingresa el Título: ");
    return titulo;
}
// Función para solicitar y retornar la descripción de la tarea desde el usuario
function pedirDescripcion() {
    var descripcion = (0, extra_1.leer)("2. Ingresa la descripción: ");
    return descripcion;
}
exports.pedirDescripcion = pedirDescripcion;
// Función para solicitar y retornar el estado de la tarea desde el usuario
function pedirEstado() {
    var estado = (0, extra_1.leer)("3. Estado ([P]endiente / [E]n curso): ").toLowerCase();
    return estado;
}
// Función para solicitar y retornar la dificultad de la tarea desde el usuario
function pedirDificultad() {
    var dificultad = (0, extra_1.leer)("4. Dificultad ([F]ácil / [M]edio / [D]ificil): ").toLowerCase();
    return dificultad;
}
exports.pedirDificultad = pedirDificultad;
// Función principal para agregar tareas
function agregarTareas() {
    console.clear();
    // Crear una nueva instancia de la clase Tarea con los datos proporcionados por el usuario
    var nuevaTarea = new Tarea_1.Tarea(pedirTitulo(), pedirDescripcion(), pedirEstado(), pedirDificultad());
    // Agregar la nueva tarea al arreglo de tareas utilizando la función importada
    (0, arrayTareas_1.agregarTarea)(nuevaTarea);
    // Mostrar mensaje de éxito al usuario
    (0, extra_1.volver)("\n¡Datos guardados!\n");
}
exports.agregarTareas = agregarTareas;
