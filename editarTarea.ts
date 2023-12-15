/** 
 * Programación Orientada a Objetos: La función editarTarea opera principalmente
 * en instancias de la clase Tarea y utiliza el método editar, lo cual sigue el paradigma orientado a objetos.
 * */

/** 
 * Programación Funcional: La función utiliza funciones importadas (leer, volver) que pueden considerarse
 * parte de un enfoque funcional. Además, se emplea la función pedirEstado que realiza una operación simple y pura.
 * */

/** 
 * Programación Estructurada: La estructura general del código sigue un enfoque estructurado,
 * con funciones que realizan tareas específicas y la secuencia de operaciones claramente definida.
 * */

// Importar funciones necesarias desde el archivo "extra" y otras dependencias
import { leer, volver, borrarPantallayEncabezado } from "./extra";
import { Tarea, EstadoTarea } from "./Tarea";
import { pedirDescripcion, pedirDificultad } from "./agregarTareas";

// Función para solicitar y retornar el estado de la tarea desde el usuario
function pedirEstado(): EstadoTarea {
    // Utiliza la función leer del archivo "extra" para obtener el estado desde el usuario,
    // y lo convierte a minúsculas para manejar entradas en mayúsculas o minúsculas
    const estado: EstadoTarea = leer("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toLowerCase() as EstadoTarea;
    return estado;
}

// Función principal para editar una tarea existente
export function editarTarea(tarea: Tarea): void {
    // Borra la pantalla y muestra un encabezado informativo sobre la tarea en edición
    borrarPantallayEncabezado(`Estás editando la tarea ${tarea.titulo}.\n`);

    // Proporciona instrucciones al usuario sobre cómo realizar la edición
    console.log("- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.\n");

    // Utiliza el método editar de la tarea para actualizar sus atributos con los datos proporcionados por el usuario
    tarea.editar(pedirDescripcion(), pedirEstado(), pedirDificultad());

    // Muestra un mensaje de éxito al usuario
    volver("\n¡Datos guardados!\n");
}