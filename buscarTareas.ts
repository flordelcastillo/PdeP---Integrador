import { leer } from "./main";
import { menuPrincipal } from "./menu";
import { Tarea } from "./Tarea";
import { mostrarTareas } from "./mostrarMenuTareas";

import { arrayTareas } from "./arrayTareas";

export function buscarTareas(): void {
    console.clear(); // Limpia la consola.
    console.log("Introduce el título de una Tarea para buscarla:");
    const palabraClave = leer("> ");
                                                        
    const tareasCoincidentes = arrayTareas.filter((tarea: Tarea) =>
        tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase())
    );
    switch (tareasCoincidentes.length) {
        case 0:
            console.log('No hay tareas relacionadas con la búsqueda.');
            leer("Presione cualquier tecla para continuar...");
            menuPrincipal();
            break;
        default:
            mostrarTareas(' relacionadas con la palabra' + palabraClave + ': ', tareasCoincidentes);
    }
}