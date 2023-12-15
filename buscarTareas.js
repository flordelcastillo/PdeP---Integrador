"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTareas = void 0;
// Importar funciones y clases necesarias desde otros archivos
var main_1 = require("./main");
var arrayTareas_1 = require("./arrayTareas");
var mostrarMenuTareas_1 = require("./mostrarMenuTareas");
// Función para mostrar tareas coincidentes con la búsqueda
function mostrarBusquedas(tareasCoincidentes, palabraClave) {
    // Utiliza un switch para manejar diferentes casos basados en la cantidad de tareas coincidentes
    switch (tareasCoincidentes.length) {
        case 0:
            // Si no hay coincidencias, vuelve al menú principal y muestra un mensaje informativo
            (0, main_1.volver)('\nNo hay tareas relacionadas con la búsqueda.\n');
            break;
        default:
            // Si hay coincidencias, llama a la función mostrarTareas para mostrar los detalles de las tareas
            (0, mostrarMenuTareas_1.mostrarTareas)(' relacionadas con la palabra' + palabraClave + ': ', tareasCoincidentes);
    }
}
// Función principal para buscar tareas por título
function buscarTareas() {
    // Borra la pantalla y muestra un encabezado para indicar al usuario que introduzca el título de la tarea
    (0, main_1.borrarPantallayEncabezado)("Introduce el título de una Tarea para buscarla:");
    // Lee la palabra clave de búsqueda ingresada por el usuario
    var palabraClave = (0, main_1.leer)("> ");
    // Filtra las tareas coincidentes con la palabra clave utilizando el método filter
    var tareasCoincidentes = arrayTareas_1.arrayTareas.filter(function (tarea) {
        return tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase());
    });
    // Llama a la función para mostrar las tareas coincidentes o un mensaje informativo si no hay coincidencias
    mostrarBusquedas(tareasCoincidentes, palabraClave);
}
exports.buscarTareas = buscarTareas;
