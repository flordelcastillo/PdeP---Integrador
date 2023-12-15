import { leer, volver } from "./main";
import { agregarTarea } from "./arrayTareas";
import { Tarea } from "./Tarea";
import { DificultadTarea, EstadoTarea } from "./Tarea";

function pedirTitulo(): string {
    const titulo: string = leer("1. Ingresa el Título: ");
    return titulo;
}

export function pedirDescripcion(): string {
    const descripcion: string = leer("2. Ingresa la descripción: ");
    return descripcion;
}

function pedirEstado(): EstadoTarea {
    const estado: EstadoTarea = leer("3. Estado ([P]endiente / [E]n curso): ").toLowerCase() as EstadoTarea;
    return estado;
}

export function pedirDificultad(): DificultadTarea {
    const dificultad: DificultadTarea = leer("4. Dificultad ([F]ácil / [M]edio / [D]ificil): ").toLowerCase() as DificultadTarea;
    return dificultad;
}

export function agregarTareas(): void {
    console.clear();

    const nuevaTarea = new Tarea(pedirTitulo(), pedirDescripcion(), pedirEstado(), pedirDificultad());
    agregarTarea(nuevaTarea);

    volver("\n¡Datos guardados!\n");
}
