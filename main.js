"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarPantallayEncabezado = exports.volver = exports.leer = void 0;
var menu_1 = require("./menu");
exports.leer = require('prompt-sync')();
function volver(encabezado) {
    (0, exports.leer)("".concat(encabezado, "\nPresione cualquier tecla para continuar..."));
    (0, menu_1.menuPrincipal)();
}
exports.volver = volver;
function borrarPantallayEncabezado(encabezado) {
    console.clear();
    console.log("".concat(encabezado, "\n"));
}
exports.borrarPantallayEncabezado = borrarPantallayEncabezado;
(0, menu_1.menuPrincipal)();
