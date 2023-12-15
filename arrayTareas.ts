/**
 * Programación Orientada a Objetos: Importa una clase Tarea y utiliza instancias de esa clase para
 * llenar un arreglo (arrayTareas). La función agregarTarea es un método de ese objeto arrayTareas.
 * */

// Importar la clase Tarea desde el archivo "Tarea"
import { Tarea } from "./Tarea";

// Crear un arreglo vacío para almacenar las instancias de la clase Tarea
export let arrayTareas: Tarea[] = [];

// Función para agregar una nueva tarea al arreglo de tareas
export function agregarTarea(nuevaTarea: Tarea): void {
    // Utiliza el método push para agregar la nueva tarea al final del arreglo
    arrayTareas.push(nuevaTarea);
}