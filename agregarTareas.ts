// Importar funciones y clases necesarias desde otros archivos
import { leer, volver } from "./extra";
import { agregarTarea } from "./arrayTareas";
import { Tarea } from "./Tarea";
import { DificultadTarea, EstadoTarea } from "./Tarea";

// Función para solicitar y retornar el título de la tarea desde el usuario
function pedirTitulo(): string {
    const titulo: string = leer("1. Ingresa el Título: ");
    return titulo;
}

// Función para solicitar y retornar la descripción de la tarea desde el usuario
export function pedirDescripcion(): string {
    const descripcion: string = leer("2. Ingresa la descripción: ");
    return descripcion;
}

// Función para solicitar y retornar el estado de la tarea desde el usuario
function pedirEstado(): EstadoTarea {
    const estado: EstadoTarea = leer("3. Estado ([P]endiente / [E]n curso): ").toLowerCase() as EstadoTarea;
    return estado;
}

// Función para solicitar y retornar la dificultad de la tarea desde el usuario
export function pedirDificultad(): DificultadTarea {
    const dificultad: DificultadTarea = leer("4. Dificultad ([F]ácil / [M]edio / [D]ificil): ").toLowerCase() as DificultadTarea;
    return dificultad;
}

// Función principal para agregar tareas
export function agregarTareas(): void {
    console.clear();

    // Crear una nueva instancia de la clase Tarea con los datos proporcionados por el usuario
    const nuevaTarea = new Tarea(pedirTitulo(), pedirDescripcion(), pedirEstado(), pedirDificultad());

    // Agregar la nueva tarea al arreglo de tareas utilizando la función importada
    agregarTarea(nuevaTarea);

    // Mostrar mensaje de éxito al usuario
    volver("\n¡Datos guardados!\n");
}