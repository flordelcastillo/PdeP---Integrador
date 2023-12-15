/**
 * Programación Orientada a Objetos: La clase Tarea encapsula propiedades y comportamientos relacionados
 * con una tarea específica. Utiliza un constructor para inicializar el objeto, tiene métodos privados
 * para validar el estado y la dificultad, y métodos públicos para acceder y modificar las propiedades.
 * */

// Definición de tipos personalizados para el estado y la dificultad de la tarea
export type EstadoTarea = 'pendiente' | 'en curso' | 'terminada' | 'cancelada';
export type DificultadTarea = 'fácil' | 'medio' | 'difícil';

// Definición de la clase Tarea
export class Tarea {
    private _titulo: string;                 // Título de la tarea
    private _descripcion: string | null;     // Descripción opcional de la tarea
    private _estado: EstadoTarea;             // Estado actual de la tarea
    private _fechaCreacion: Date;             // Fecha de creación de la tarea
    private _dificultad: DificultadTarea;     // Nivel de dificultad de la tarea

    // Constructor de la clase Tarea
    constructor(titulo: string, descripcion: string | null, estado: EstadoTarea, dificultad: DificultadTarea) {
        // Inicialización de las propiedades de la tarea
        this._titulo = titulo;
        this._descripcion = descripcion || null;
        this._estado = this.validarEstado(estado);
        this._fechaCreacion = new Date();
        this._dificultad = this.validarDificultad(dificultad);
    }

    // Método privado para validar el estado de la tarea
    private validarEstado(estado: EstadoTarea): EstadoTarea {
        return ['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado)
            ? estado
            : 'pendiente';
    }

    // Método privado para validar la dificultad de la tarea
    private validarDificultad(dificultad: DificultadTarea): DificultadTarea {
        switch (dificultad) {
            case 'fácil':
            case 'medio':
            case 'difícil':
                return dificultad;
            default:
                return 'fácil';
        }
    }

    // Método para editar los atributos de la tarea
    editar(nuevaDescripcion: string, nuevoEstado: EstadoTarea, nuevaDificultad: DificultadTarea): void {
        // Actualizar la descripción si se proporciona un valor no vacío
        if (nuevaDescripcion.trim() !== '') {
            this.descripcion = nuevaDescripcion;
        }
        // Validar y actualizar el estado si se proporciona un valor no vacío
        if (nuevoEstado.trim() !== '') {
            this.estado = this.validarEstado(nuevoEstado);
        }
        // Validar y actualizar la dificultad si se proporciona un valor no vacío
        if (nuevaDificultad.trim() !== '') {
            this.dificultad = this.validarDificultad(nuevaDificultad);
        }
    }

    // Métodos de acceso para obtener y establecer el título de la tarea
    get titulo(): string {
        return this._titulo;
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }

    // Métodos de acceso para obtener y establecer la descripción de la tarea
    get descripcion(): string | null {
        return this._descripcion;
    }

    set descripcion(descripcion: string | null) {
        this._descripcion = descripcion;
    }

    // Métodos de acceso para obtener y establecer el estado de la tarea
    get estado(): EstadoTarea {
        return this._estado;
    }

    set estado(estado: EstadoTarea) {
        this._estado = estado;
    }

    // Método de acceso para obtener la fecha de creación de la tarea
    get fechaCreacion(): Date {
        return this._fechaCreacion;
    }

    // Métodos de acceso para obtener y establecer la dificultad de la tarea
    get dificultad(): DificultadTarea {
        return this._dificultad;
    }

    set dificultad(dificultad: DificultadTarea) {
        this._dificultad = dificultad;
    }
}