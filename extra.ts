// Importar la función menuPrincipal desde el archivo "menu"
import { menuPrincipal } from './menu';

// Importar la función de lectura síncrona de "prompt-sync"
export const leer = require('prompt-sync')();

// Función para volver al menú principal
export function volver(encabezado: string) {
    // Mostrar el encabezado y esperar a que el usuario presione cualquier tecla antes de volver al menú principal
    leer(`${encabezado}\nPresione enter para continuar...`);

    // Llamar a la función menuPrincipal para volver al menú principal
    menuPrincipal();
}

// Función para borrar la consola y mostrar un encabezado
export function borrarPantallayEncabezado(encabezado: string): void {
    // Limpiar la consola y mostrar el encabezado proporcionado
    console.clear();
    console.log(`${encabezado}\n`);
}