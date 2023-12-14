import { arrayTareas } from "./arrayTareas";
import { menuPrincipal } from "./menu";
import { Tarea } from "./Tarea";
import { leer } from "./main";
import { DificultadTarea } from "./Tarea";

export function mostrarMenuTareas(): void {
  console.clear();
  console.log("  ¿Qué tareas deseas ver?\n");
  console.log("  [1] Todas.");
  console.log("  [2] Pendientes.");
  console.log("  [3] En curso.");
  console.log("  [4] Terminadas.");
  console.log("  [0] Volver");
  switchDeMostrarPorEstado(leer("> "));
}

export function switchDeMostrarPorEstado(opcion: string): void {
  switch (Number(opcion)) {
    case 0:
      menuPrincipal();
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

export function filtrarPorEstado(estado: string): Tarea[] {
  return arrayTareas.filter((tarea: Tarea) => tarea.estado === estado);
}

export function mostrarEncabezado(encabezado: string): void {
  console.clear();
  console.log(`Estas son todas tus tareas${encabezado}`);
}

export function mostrarTareas(encabezado: string, tareasParaMostrar: Tarea[]): void {
  const arrayTarea = tareasParaMostrar || this.tarea;

  mostrarEncabezado(encabezado);

  if (arrayTarea.length === 0) {
    console.log('No hay tareas disponibles.');
    menuPrincipal();
  }
  else {
    arrayTarea.forEach((tarea, indice) => {
      console.log(`${indice + 1}.  ${tarea.titulo}`);
    });

    console.log("\n¿Deseas ver los detalles de alguna?");
    console.log("Introduce el número para verlo o 0 para volver");
    let opcion = leer("> ");

    if (Number(opcion) == 0) {
      menuPrincipal();
    }
    else {
      const opcionNumero = parseInt(opcion, 10);
      if (!isNaN(opcionNumero) && opcionNumero >= 1 && opcionNumero <= arrayTareas.length) {
        verDetallesTareas(arrayTareas[opcionNumero - 1]);
      }
      else {
        console.log("Opción Incorrecta! Por favor, ingresa un número válido.");
        mostrarTareas(encabezado, arrayTareas);
      }
    }
  }
}

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

function editarOvolver(tarea: Tarea) :void{
  console.log("Si deseas editarla, presiona E, o presiona 0 para volver al menú principal")
  let opcion: string = leer("> ");
  switch (opcion.toUpperCase()) {
    case 'E':
      menuPrincipal();
      //editarTarea(tarea);
      break;
    case '0':
      menuPrincipal();
      break;
    default:
      console.log("Opción Incorrecta!");
      verDetallesTareas(tarea);
      break;
  }
}

export function verDetallesTareas(tarea: Tarea): void {
  console.clear(); // Limpia la consola.
  console.log("Esta es la tarea que elegiste.\n");
  console.log(`  ${tarea.titulo}`); // Muestra el título de la tarea.
  console.log(`  ${tarea.descripcion ? tarea.descripcion : ''}`); // Muestra la descripción si está disponible.
  console.log(`  Estado:      ${tarea.estado}`); // Muestra el estado de la tarea.
  mostrarEstrellas(tarea.dificultad);
  console.log(`  Creación:    ${tarea.fechaCreacion}`); // Muestra la fecha de creación de la tarea.
  editarOvolver(tarea);
}
                      