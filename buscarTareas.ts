import { leer, volver, borrarPantallayEncabezado } from "./main";
import { Tarea } from "./Tarea";
import { arrayTareas } from "./arrayTareas";
import { mostrarTareas } from "./mostrarMenuTareas";

function mostrarBusquedas(tareasCoincidentes: Tarea[], palabraClave: string): void {
    switch (tareasCoincidentes.length) {
        case 0:
            volver('\nNo hay tareas relacionadas con la búsqueda.\n');
            break;
        default:
            mostrarTareas(' relacionadas con la palabra' + palabraClave + ': ', tareasCoincidentes);
    }
}

export function buscarTareas(): void {
    borrarPantallayEncabezado("Introduce el título de una Tarea para buscarla:");
    const palabraClave: string = leer("> ");
    const tareasCoincidentes: Tarea[] = arrayTareas.filter((tarea: Tarea) =>
        tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase())
    );
    mostrarBusquedas(tareasCoincidentes, palabraClave);
}
