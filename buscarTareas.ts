// Importar funciones y clases necesarias desde otros archivos
import { leer, volver, borrarPantallayEncabezado } from "./main";
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
            mostrarTareas(' relacionadas con la palabra' + palabraClave + ': ', tareasCoincidentes);
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