import { menuPrincipal } from './menu';

export const leer = require('prompt-sync')();

export function volver(encabezado: string) {
    leer(`${encabezado}\nPresione cualquier tecla para continuar...`);
    menuPrincipal();
}

export function borrarPantallayEncabezado(encabezado: string): void {
    console.clear();
    console.log(`${encabezado}\n`)
}

menuPrincipal();