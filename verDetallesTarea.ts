/**
 * Programación Estructurada: Aunque la función tiene varias secciones y utiliza funciones importadas,
 *  sigue un flujo estructurado. La lógica está organizada de manera secuencial y utiliza estructuras
 * de control como switch para manejar diferentes casos.
 * */

/**
 * Programación Funcional: La función mostrarEstrellas es un ejemplo de un enfoque funcional,
 * ya que toma un valor y produce una salida sin efectos secundarios.
 * Además, la función verDetallesTareas parece seguir un estilo más funcional al pasar la tarea
 * como parámetro y evitar efectos secundarios directos.
 * */

/**
 * Programación Orientada a Objetos: Se utiliza la clase Tarea para representar y manipular objetos de tipo tarea.
 * La función editarOvolver interactúa con un objeto Tarea y muestra detalles basados en sus propiedades.
 * También cuenta con encapsulación, las funciones mostrarEstrellas y verDetallesTareas están encapsuladas;
 * cada una tiene una responsabilidad específica y se puede entender y probar de manera independiente.
 * */

// Importar funciones necesarias desde otros archivos
import { leer, volver, borrarPantallayEncabezado } from "./extra";
import { Tarea, DificultadTarea } from "./Tarea";
import { editarTarea } from "./editarTarea";

// Función para mostrar el nivel de dificultad de una tarea en forma de estrellas
function mostrarEstrellas(dificultad: DificultadTarea): void {
    // Utiliza un switch para imprimir el nivel de dificultad en forma de estrellas
    switch (dificultad) {
        case "fácil":
            console.log("  Dificultad:  ★☆☆");
            break;
        case "medio":
            console.log("  Dificultad:  ★★☆");
            break;
        case "difícil":
            console.log("  Dificultad:  ★★★");
            break;
    }
}

// Función para editar la tarea o volver al menú principal
function editarOvolver(tarea: Tarea): void {
    // Solicita al usuario elegir entre editar la tarea o volver al menú principal
    console.log("Si deseas editarla, presiona E, o presiona 0 para volver al menú principal");
    let opcion: string = leer("> ");

    // Utiliza un switch para manejar las opciones del usuario
    switch (opcion.toUpperCase()) {
        case 'E':
            // Llama a la función de edición de tarea
            editarTarea(tarea);
            break;
        case '0':
            // Vuelve al menú principal
            volver("");
            break;
        default:
            // Maneja una opción incorrecta mostrando un mensaje y volviendo a mostrar los detalles de la tarea
            leer("Opción Incorrecta!\nPresione enter para continuar...");
            verDetallesTareas(tarea);
            break;
    }
}

// Función principal para mostrar los detalles de una tarea
export function verDetallesTareas(tarea: Tarea): void {
    // Borra la pantalla y muestra un encabezado informativo
    borrarPantallayEncabezado("Esta es la tarea que elegiste.");

    // Muestra diferentes detalles de la tarea utilizando console.log
    console.log(`  ${tarea.titulo}`); // Muestra el título de la tarea.
    console.log(`  ${tarea.descripcion ? tarea.descripcion : ''}`); // Muestra la descripción si está disponible.
    console.log(`  Estado:      ${tarea.estado}`); // Muestra el estado de la tarea.

    // Muestra el nivel de dificultad en forma de estrellas utilizando la función anterior
    mostrarEstrellas(tarea.dificultad);

    console.log(`  Creación:    ${tarea.fechaCreacion}`); // Muestra la fecha de creación de la tarea.

    // Llama a la función para editar la tarea o volver al menú principal
    editarOvolver(tarea);
}