import { leer } from "./main";
import { mostrarMenuTareas } from "./mostrarMenuTareas";
import { agregarTareas } from "./agregarTareas";
import { buscarTareas } from "./buscarTareas";

export function menuPrincipal(): void {
    console.clear();
    console.log("¿Qué deseas hacer?\n");
    console.log("  [1] Ver mis tareas.");
    console.log("  [2] Buscar una tarea.");
    console.log("  [3] Agregar una tarea.");
    console.log("  [0] Salir.");
    switchDeMenu(leer("> "));
}

export function switchDeMenu(opcion: string): void {
    switch (Number(opcion)) {
        case 1:
            mostrarMenuTareas();
            break;
        case 2:
            buscarTareas();
            break;
        case 3:
            agregarTareas();
            break;
        case 0:
            process.exit(0);
        default:
            console.log("Opción Incorrecta!");
            menuPrincipal();
            break;
    }
}