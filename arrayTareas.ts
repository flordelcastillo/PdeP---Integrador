import { Tarea } from "./Tarea";

export let arrayTareas: Tarea[] = [];

export function agregarTarea(nuevaTarea: Tarea): void {
    arrayTareas.push(nuevaTarea);
}