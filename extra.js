"use strict";
/**
 * Programación Estructurada: Este código sigue un enfoque principalmente estructurado.
 * Las funciones volver y borrarPantallayEncabezado están claramente organizadas y cumplen funciones específicas.
 * La ejecución sigue una secuencia lógica.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarPantallayEncabezado = exports.volver = exports.leer = void 0;
/** Programación Funcional: Aunque el código no muestra un estilo de programación funcional puro,
 * se nota el uso de funciones y la ausencia de efectos secundarios significativos.
 * La función leer está asignada a require('prompt-sync')(), que proporciona una función para leer de manera síncrona,
 * y console.clear() se utiliza para limpiar la consola. Estos pueden considerarse elementos de un estilo más funcional.
 * */
// Importar la función menuPrincipal desde el archivo "menu"
var menu_1 = require("./menu");
// Importar la función de lectura síncrona de "prompt-sync"
exports.leer = require('prompt-sync')();
// Función para volver al menú principal
function volver(encabezado) {
    // Mostrar el encabezado y esperar a que el usuario presione cualquier tecla antes de volver al menú principal
    (0, exports.leer)("".concat(encabezado, "\nPresione enter para continuar..."));
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
