"use strict";
/**
 * Programación Orientada a Objetos: La clase Tarea encapsula propiedades y comportamientos relacionados
 * con una tarea específica. Utiliza un constructor para inicializar el objeto, tiene métodos privados
 * para validar el estado y la dificultad, y métodos públicos para acceder y modificar las propiedades.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
// Definición de la clase Tarea
var Tarea = /** @class */ (function () {
    // Constructor de la clase Tarea
    function Tarea(titulo, descripcion, estado, dificultad) {
        // Inicialización de las propiedades de la tarea
        this._titulo = titulo;
        this._descripcion = descripcion || null;
        this._estado = this.validarEstado(estado);
        this._fechaCreacion = new Date();
        this._dificultad = this.validarDificultad(dificultad);
    }
    // Método privado para validar el estado de la tarea
    Tarea.prototype.validarEstado = function (estado) {
        return ['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado)
            ? estado
            : 'pendiente';
    };
    // Método privado para validar la dificultad de la tarea
    Tarea.prototype.validarDificultad = function (dificultad) {
        switch (dificultad) {
            case 'facil':
                return 'fácil'; // Normaliza 'facil' a 'fácil'.
            case 'medio':
                return 'medio'; // Mantiene 'medio' sin cambios.
            case 'dificil':
                return 'difícil'; // Normaliza 'dificil' a 'difícil'.
            default:
                return 'fácil'; // Si la dificultad no es válida, establece 'facil' por defecto.
        }
    };
    // Método para editar los atributos de la tarea
    Tarea.prototype.editar = function (nuevaDescripcion, nuevoEstado, nuevaDificultad) {
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
    };
    Object.defineProperty(Tarea.prototype, "titulo", {
        // Métodos de acceso para obtener y establecer el título de la tarea
        get: function () {
            return this._titulo;
        },
        set: function (titulo) {
            this._titulo = titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "descripcion", {
        // Métodos de acceso para obtener y establecer la descripción de la tarea
        get: function () {
            return this._descripcion;
        },
        set: function (descripcion) {
            this._descripcion = descripcion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "estado", {
        // Métodos de acceso para obtener y establecer el estado de la tarea
        get: function () {
            return this._estado;
        },
        set: function (estado) {
            this._estado = estado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "fechaCreacion", {
        // Método de acceso para obtener la fecha de creación de la tarea
        get: function () {
            return this._fechaCreacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "dificultad", {
        // Métodos de acceso para obtener y establecer la dificultad de la tarea
        get: function () {
            return this._dificultad;
        },
        set: function (dificultad) {
            this._dificultad = dificultad;
        },
        enumerable: false,
        configurable: true
    });
    return Tarea;
}());
exports.Tarea = Tarea;
