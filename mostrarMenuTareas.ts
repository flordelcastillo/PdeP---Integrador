/** 
 * Programación Estructurada: El código sigue un enfoque principalmente estructurado al
 * organizar funciones de manera clara y utilizar estructuras de control como switch.
 * La ejecución sigue una secuencia de pasos lógica y lineal.
 * */

/** 
 * Programación Orientada a Objetos: El código también incluye elementos de programación orientada a objetos,
 * ya que utiliza la clase Tarea y realiza operaciones en instancias de esa clase.
 * La función filtrarPorEstado es un ejemplo de cómo se utiliza el paradigma orientado a objetos
 * para filtrar tareas por estado.
*/

/**
 * Programación Funcional: Se utiliza en ciertas partes del código.
 * Por ejemplo, la función filter en la función filtrarPorEstado se utiliza de manera funcional
 * para filtrar tareas. Además, hay otras funciones que muestran rasgos de programación funcional,
 * como forEach y console.log para imprimir las tareas.
 */

// Importar funciones y clases necesarias desde otros archivos
import { leer, volver, borrarPantallayEncabezado } from "./extra";
import { arrayTareas } from "./arrayTareas";
import { Tarea } from "./Tarea";
import { verDetallesTareas } from "./verDetallesTarea";

// Función principal para mostrar el menú de tareas
export function mostrarMenuTareas(): void {
    // Borra la pantalla y muestra un encabezado con las opciones disponibles
    borrarPantallayEncabezado("¿Qué tareas deseas ver?");

    // Muestra las opciones disponibles en el menú de tareas
    console.log("  [1] Todas.");
    console.log("  [2] Pendientes.");
    console.log("  [3] En curso.");
    console.log("  [4] Terminadas.");
    console.log("  [0] Volver");

    // Llama a la función switchDeMostrarPorEstado para manejar la opción ingresada por el usuario
    switchDeMostrarPorEstado(leer("> "));
}

// Función para manejar las opciones del menú de tareas
function switchDeMostrarPorEstado(opcion: string): void {
    // Utiliza un switch para manejar diferentes casos basados en la opción ingresada
    switch (Number(opcion)) {
        case 0:
            // Si la opción es 0, vuelve al menú principal
            volver("");
            break;
        case 1:
            // Si la opción es 1, muestra todas las tareas
            mostrarTareas(".", arrayTareas);
            break;
        case 2:
            // Si la opción es 2, muestra las tareas pendientes
            mostrarTareas(" pendientes.", filtrarPorEstado('pendiente'));
            break;
        case 3:
            // Si la opción es 3, muestra las tareas en curso
            mostrarTareas(" en curso.", filtrarPorEstado('en curso'));
            break;
        case 4:
            // Si la opción es 4, muestra las tareas terminadas
            mostrarTareas(" terminadas.", filtrarPorEstado('terminada'));
            break;
        default:
            // Si la opción no es válida, muestra un mensaje de error y vuelve al menú de tareas
            console.log("Opción Incorrecta!");
            mostrarMenuTareas();
            break;
    }
}

// Función para filtrar tareas por estado
function filtrarPorEstado(estado: string): Tarea[] {
    return arrayTareas.filter((tarea: Tarea) => tarea.estado === estado);
}

// Función para mostrar las tareas con un encabezado específico
export function mostrarTareas(encabezado: string, tareasParaMostrar: Tarea[]): void {
    const arrayTarea: Tarea[] = tareasParaMostrar;

    // Muestra un encabezado informativo
    mostrarEncabezado(encabezado);

    // Llama a la función vacioOmostrar para manejar el caso de tareas vacías o mostrar las tareas
    vacioOmostrar(arrayTarea, encabezado);
}

// Función para mostrar un encabezado específico
function mostrarEncabezado(encabezado: string): void {
    borrarPantallayEncabezado(`Estas son todas tus tareas${encabezado}`);
}

// Función para manejar el caso de tareas vacías o mostrar las tareas
function vacioOmostrar(arrayTarea: Tarea[], encabezado: string): void {
    // Utiliza un switch para manejar diferentes casos basados en la cantidad de tareas
    switch (arrayTarea.length) {
        case 0:
            // Si no hay tareas, vuelve al menú principal y muestra un mensaje informativo
            volver('No hay tareas disponibles.');
            break;
        default:
            // Si hay tareas, muestra cada tarea y pregunta si el usuario desea ver los detalles de alguna
            arrayTarea.forEach((tarea, indice) => {
                console.log(`  [${indice + 1}]  ${tarea.titulo}`);
            });
            preguntaIrDetalles(arrayTarea, encabezado);
            break;
    }
}

// Función para preguntar al usuario si desea ver los detalles de alguna tarea
function preguntaIrDetalles(arrayTarea: Tarea[], encabezado: string): void {
    console.log("\n¿Deseas ver los detalles de alguna?\nIntroduce el número para verlo o 0 para volver");

    // Llama a la función volverOdetalles para manejar la opción ingresada por el usuario
    volverOdetalles(leer("> "), arrayTarea, encabezado);
}

// Función para volver al menú principal o ver los detalles de una tarea
function volverOdetalles(opcion: string, arrayTarea: Tarea[], encabezado: string): void {
    // Utiliza un switch para manejar diferentes casos basados en la opción ingresada
    switch (Number(opcion)) {
        case 0:
            // Si la opción es 0, vuelve al menú principal
            volver("");
            break;
        default:
            const opcionNumero: number = parseInt(opcion);
            const isValidOption: boolean = !isNaN(opcionNumero) && opcionNumero >= 1 && opcionNumero <= arrayTarea.length;
            // Si la opción es un número válido, llama a la función verDetallesTareas
            isValidOption
                ? verDetallesTareas(arrayTarea[opcionNumero - 1])
                : (
                    console.log("Opción Incorrecta! Por favor, ingresa un número válido."),
                    mostrarTareas(encabezado, arrayTarea)
                );
            break;
    }
}