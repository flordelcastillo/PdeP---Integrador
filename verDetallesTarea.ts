import { leer, volver, borrarPantallayEncabezado } from "./main";
import { Tarea, DificultadTarea } from "./Tarea";
import { editarTarea } from "./editarTarea";


function mostrarEstrellas(dificultad: DificultadTarea): void {
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

function editarOvolver(tarea: Tarea): void {
    console.log("Si deseas editarla, presiona E, o presiona 0 para volver al menú principal")
    let opcion: string = leer("> ");
    switch (opcion.toUpperCase()) {
        case 'E':
            editarTarea(tarea);
            break;
        case '0':
            volver("");
            break;
        default:
            leer("Opción Incorrecta!\nPresione enter para continuar...");
            verDetallesTareas(tarea);
            break;
    }
}

export function verDetallesTareas(tarea: Tarea): void {
    borrarPantallayEncabezado("Esta es la tarea que elegiste.");
    console.log(`  ${tarea.titulo}`); // Muestra el título de la tarea.
    console.log(`  ${tarea.descripcion ? tarea.descripcion : ''}`); // Muestra la descripción si está disponible.
    console.log(`  Estado:      ${tarea.estado}`); // Muestra el estado de la tarea.
    mostrarEstrellas(tarea.dificultad);
    console.log(`  Creación:    ${tarea.fechaCreacion}`); // Muestra la fecha de creación de la tarea.
    editarOvolver(tarea);
}