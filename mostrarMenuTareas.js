"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = exports.verDetallesTareas = exports.mostrarTareas = exports.mostrarEncabezado = exports.filtrarPorEstado = exports.switchDeMostrarPorEstado = exports.mostrarMenuTareas = void 0;
var arrayTareas_1 = require("./arrayTareas");
var menu_1 = require("./menu");
var main_1 = require("./main");
var agregarTareas_1 = require("./agregarTareas");
function mostrarMenuTareas() {
    console.clear();
    console.log("  ¿Qué tareas deseas ver?\n");
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
            (0, menu_1.menuPrincipal)();
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
exports.switchDeMostrarPorEstado = switchDeMostrarPorEstado;
function filtrarPorEstado(estado) {
    return arrayTareas_1.arrayTareas.filter(function (tarea) { return tarea.estado === estado; });
}
exports.filtrarPorEstado = filtrarPorEstado;
function mostrarEncabezado(encabezado) {
    console.clear();
    console.log("Estas son todas tus tareas".concat(encabezado));
}
exports.mostrarEncabezado = mostrarEncabezado;
function mostrarTareas(encabezado, tareasParaMostrar) {
    var arrayTarea = tareasParaMostrar || this.tarea;
    mostrarEncabezado(encabezado);
    if (arrayTarea.length === 0) {
        console.log('No hay tareas disponibles.');
        (0, menu_1.menuPrincipal)();
    }
    else {
        arrayTarea.forEach(function (tarea, indice) {
            console.log("".concat(indice + 1, ".  ").concat(tarea.titulo));
        });
        console.log("\n¿Deseas ver los detalles de alguna?");
        console.log("Introduce el número para verlo o 0 para volver");
        var opcion = (0, main_1.leer)("> ");
        if (Number(opcion) == 0) {
            (0, menu_1.menuPrincipal)();
        }
        else {
            var opcionNumero = parseInt(opcion, 10);
            if (!isNaN(opcionNumero) && opcionNumero >= 1 && opcionNumero <= arrayTareas_1.arrayTareas.length) {
                verDetallesTareas(arrayTareas_1.arrayTareas[opcionNumero - 1]);
            }
            else {
                console.log("Opción Incorrecta! Por favor, ingresa un número válido.");
                mostrarTareas(encabezado, arrayTareas_1.arrayTareas);
            }
        }
    }
}
exports.mostrarTareas = mostrarTareas;
function mostrarEstrellas(dificultad) {
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
function editarOvolver(tarea) {
    console.log("Si deseas editarla, presiona E, o presiona 0 para volver al menú principal");
    var opcion = (0, main_1.leer)("> ");
    switch (opcion.toUpperCase()) {
        case 'E':
            editarTarea(tarea);
            break;
        case '0':
            (0, menu_1.menuPrincipal)();
            break;
        default:
            console.log("Opción Incorrecta!");
            verDetallesTareas(tarea);
            break;
    }
}
function verDetallesTareas(tarea) {
    console.clear(); // Limpia la consola.
    console.log("Esta es la tarea que elegiste.\n");
    console.log("  ".concat(tarea.titulo)); // Muestra el título de la tarea.
    console.log("  ".concat(tarea.descripcion ? tarea.descripcion : '')); // Muestra la descripción si está disponible.
    console.log("  Estado:      ".concat(tarea.estado)); // Muestra el estado de la tarea.
    mostrarEstrellas(tarea.dificultad);
    console.log("  Creaci\u00F3n:    ".concat(tarea.fechaCreacion)); // Muestra la fecha de creación de la tarea.
    editarOvolver(tarea);
}
exports.verDetallesTareas = verDetallesTareas;
function pedirEstado() {
    var estado = (0, main_1.leer)("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toLowerCase();
    return estado;
}
function editarTarea(tarea) {
    console.clear(); // Limpia la consola.
    console.log("Est\u00E1s editando la tarea ".concat(tarea.titulo, ".\n"));
    console.log("- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.\n");
    tarea.editar((0, agregarTareas_1.pedirDescripcion)(), pedirEstado(), (0, agregarTareas_1.pedirDificultad)());
    console.log("\n¡Datos guardados!\n");
    (0, main_1.leer)("Presione cualquier tecla para continuar...");
    (0, menu_1.menuPrincipal)();
}
exports.editarTarea = editarTarea;
