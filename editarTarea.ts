import { leer, volver, borrarPantallayEncabezado } from "./main";
import { Tarea, EstadoTarea } from "./Tarea";
import { pedirDescripcion, pedirDificultad } from "./agregarTareas";

function pedirEstado(): EstadoTarea {
    const estado: EstadoTarea = leer("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toLowerCase() as EstadoTarea;
    return estado;
}

export function editarTarea(tarea: Tarea): void {
    borrarPantallayEncabezado(`Estás editando la tarea ${tarea.titulo}.\n`);
    console.log("- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.\n");

    tarea.editar(pedirDescripcion(), pedirEstado(), pedirDificultad());

    volver("\n¡Datos guardados!\n");
}