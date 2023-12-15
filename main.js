"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarPantallayEncabezado = exports.volver = exports.leer = void 0;
// Importar la función menuPrincipal desde el archivo "menu"
var menu_1 = require("./menu");
// Importar la función de lectura síncrona de "prompt-sync"
exports.leer = require('prompt-sync')();
// Función para volver al menú principal
function volver(encabezado) {
    // Mostrar el encabezado y esperar a que el usuario presione cualquier tecla antes de volver al menú principal
    (0, exports.leer)("".concat(encabezado, "\nPresione cualquier tecla para continuar..."));
    // Llamar a la función menuPrincipal para volver al menú principal
    (0, menu_1.menuPrincipal)();
}
exports.volver = volver;
// Función para borrar la consola y mostrar un encabezado
function borrarPantallayEncabezado(encabezado) {
    // Limpiar la consola y mostrar el encabezado proporcionado
    console.clear();
    console.log("".concat(encabezado, "\n"));
}
exports.borrarPantallayEncabezado = borrarPantallayEncabezado;
// Llamar automáticamente a la función menuPrincipal al ejecutar el script
(0, menu_1.menuPrincipal)();
