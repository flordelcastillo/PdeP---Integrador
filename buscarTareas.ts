/** 
 * Programación Orientada a Objetos: La función buscarTareas utiliza la clase Tarea
 * y opera principalmente en instancias de esa clase.
 * */

/** 
 * Programación Funcional: La función buscarTareas utiliza el método filter,
 * que es una operación funcional para filtrar tareas basadas en una condición, es una funcion de orden superior.
 * Además, la función mostrarBusquedas utiliza un enfoque más funcional al manejar
 * diferentes casos basados en la cantidad de tareas coincidentes.
 * El array tareasCoincidentes cumple con inmutabilidad.
 * */

/** 
 * Programación Estructurada: La estructura general del código sigue un enfoque estructurado,
 * con funciones que realizan tareas específicas y la secuencia de operaciones claramente definida.
 * */
                                                             
// Importar funciones y clases necesarias desde otros archivos
import { leer, volver, borrarPantallayEncabezado } from "./extra";
import { Tarea } from "./Tarea";
import { arrayTareas } from "./arrayTareas";
import { mostrarTareas } from "./mostrarMenuTareas";

// Función para mostrar tareas coincidentes con la búsqueda
function mostrarBusquedas(tareasCoincidentes: Tarea[], palabraClave: string): void {
    // Utiliza un switch para manejar diferentes casos basados en la cantidad de tareas coincidentes
    switch (tareasCoincidentes.length) {
        case 0:
            // Si no hay coincidencias, vuelve al menú principal y muestra un mensaje informativo
            volver('\nNo hay tareas relacionadas con la búsqueda.\n');
            break;
        default:
            // Si hay coincidencias, llama a la función mostrarTareas para mostrar los detalles de las tareas
            mostrarTareas(' relacionadas con la palabra ' + palabraClave + ': ', tareasCoincidentes);
    }
}

// Función principal para buscar tareas por título
export function buscarTareas(): void {
    // Borra la pantalla y muestra un encabezado para indicar al usuario que introduzca el título de la tarea
    borrarPantallayEncabezado("Introduce el título de una Tarea para buscarla:");

    // Lee la palabra clave de búsqueda ingresada por el usuario
    const palabraClave: string = leer("> ");

    // Filtra las tareas coincidentes con la palabra clave utilizando el método filter
    const tareasCoincidentes: Tarea[] = arrayTareas.filter((tarea: Tarea) =>
        tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase())
    );

    // Llama a la función para mostrar las tareas coincidentes o un mensaje informativo si no hay coincidencias
    mostrarBusquedas(tareasCoincidentes, palabraClave);
}