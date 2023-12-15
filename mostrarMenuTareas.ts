import { leer, volver, borrarPantallayEncabezado } from "./main";
import { arrayTareas } from "./arrayTareas";
import { Tarea } from "./Tarea";
import { verDetallesTareas } from "./verDetallesTarea";

export function mostrarMenuTareas(): void {
    borrarPantallayEncabezado("  ¿Qué tareas deseas ver?");
    console.log("  [1] Todas.");
    console.log("  [2] Pendientes.");
    console.log("  [3] En curso.");
    console.log("  [4] Terminadas.");
    console.log("  [0] Volver");
    switchDeMostrarPorEstado(leer("> "));
}

function switchDeMostrarPorEstado(opcion: string): void {
    switch (Number(opcion)) {
        case 0:
            volver("");
            break;
        case 1:
            mostrarTareas(".", arrayTareas);
            break;
        case 2:
            mostrarTareas(" pendientes.", filtrarPorEstado('pendiente'));
            break;
        case 3:
            mostrarTareas(" en curso.", filtrarPorEstado('en curso'));
            break;
        case 4:
            mostrarTareas(" terminadas.", filtrarPorEstado('terminada'));
            break;
        default:
            console.log("Opción Incorrecta!");
            mostrarMenuTareas();
            break;
    }
}

function filtrarPorEstado(estado: string): Tarea[] {
    return arrayTareas.filter((tarea: Tarea) => tarea.estado === estado);
}

export function mostrarTareas(encabezado: string, tareasParaMostrar: Tarea[]): void {
    const arrayTarea: Tarea[] = tareasParaMostrar;
    mostrarEncabezado(encabezado);
    vacioOmostrar(arrayTarea, encabezado);
}

function mostrarEncabezado(encabezado: string): void {
    borrarPantallayEncabezado(`Estas son todas tus tareas${encabezado}`);
}

function vacioOmostrar(arrayTarea: Tarea[], encabezado: string): void {
    switch (arrayTarea.length) {
        case 0:
            volver('No hay tareas disponibles.');
            break;
        default:
            arrayTarea.forEach((tarea, indice) => {
                console.log(`  [${indice + 1}]  ${tarea.titulo}`);
            });
            preguntaIrDetalles(arrayTarea, encabezado);
            break;
    }
}

function preguntaIrDetalles(arrayTarea: Tarea[], encabezado: string): void {
    console.log("\n¿Deseas ver los detalles de alguna?\nIntroduce el número para verlo o 0 para volver");
    volverOdetalles(leer("> "), arrayTarea, encabezado);
}

function volverOdetalles(opcion: string, arrayTarea: Tarea[], encabezado: string): void {
    switch (Number(opcion)) {
        case 0:
            volver("");
            break;
        default:
            const opcionNumero = parseInt(opcion, 10);
            if (!isNaN(opcionNumero) && opcionNumero >= 1 && opcionNumero <= arrayTarea.length) {
                verDetallesTareas(arrayTarea[opcionNumero - 1]);
            }
            else {
                console.log("Opción Incorrecta! Por favor, ingresa un número válido.");
                mostrarTareas(encabezado, arrayTarea);
            }
            break;
    }
}
