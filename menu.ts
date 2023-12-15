// Importar funciones necesarias desde otros archivos
import { leer, volver, borrarPantallayEncabezado } from "./extra";
import { mostrarMenuTareas } from "./mostrarMenuTareas";
import { agregarTareas } from "./agregarTareas";
import { buscarTareas } from "./buscarTareas";

// Función para mostrar el menú principal de la aplicación
export function menuPrincipal(): void {
    // Borra la pantalla y muestra un encabezado con las opciones disponibles
    borrarPantallayEncabezado("¿Qué deseas hacer?");

    // Muestra las opciones disponibles en el menú principal
    console.log("  [1] Ver mis tareas.");
    console.log("  [2] Buscar una tarea.");
    console.log("  [3] Agregar una tarea.");
    console.log("  [0] Salir.");

    // Llama a la función switchDeMenu para manejar la opción ingresada por el usuario
    switchDeMenu(leer("> "));
}

// Función para manejar las opciones del menú principal
export function switchDeMenu(opcion: string): void {
    // Utiliza un switch para manejar diferentes casos basados en la opción ingresada
    switch (Number(opcion)) {
        case 1:
            // Si la opción es 1, llama a la función para mostrar el menú de tareas existentes
            mostrarMenuTareas();
            break;
        case 2:
            // Si la opción es 2, llama a la función para buscar tareas
            buscarTareas();
            break;
        case 3:
            // Si la opción es 3, llama a la función para agregar una nueva tarea
            agregarTareas();
            break;
        case 0:
            // Si la opción es 0, termina el proceso de la aplicación
            process.exit(0);
        default:
            // Si la opción no es válida, muestra un mensaje de error y vuelve al menú principal
            volver("Opción Incorrecta!");
            break;
    }
}