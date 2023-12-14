"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
/* Definición de la clase Tarea para representar una tarea con propiedades como título, descripción, estado, fecha de creación y dificultad.*/
var Tarea = /** @class */ (function () {
    /*
        Constructor de la clase Tarea que inicializa las propiedades con los valores proporcionados y realiza normalización de algunos parámetros.
      */
    function Tarea(titulo, descripcion, estado, dificultad) {
        this._titulo = titulo;
        this._descripcion = descripcion || null;
        this._estado = this.validarEstado(estado);
        this._fechaCreacion = new Date();
        this._dificultad = this.validarDificultad(dificultad);
    }
    Tarea.prototype.validarEstado = function (estado) {
        return ['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado)
            ? estado
            : 'pendiente';
    };
    Tarea.prototype.validarDificultad = function (dificultad) {
        switch (dificultad) {
            case 'fácil':
            case 'medio':
            case 'difícil':
                return dificultad;
            default:
                return 'fácil';
        }
    };
    Tarea.prototype.editar = function (nuevaDescripcion, nuevoEstado, nuevaDificultad) {
        return new Tarea(this._titulo, nuevaDescripcion && nuevaDescripcion.trim() !== '' ? nuevaDescripcion : null, nuevoEstado || this._estado, nuevaDificultad || this._dificultad);
    };
    Object.defineProperty(Tarea.prototype, "titulo", {
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
        get: function () {
            return this._fechaCreacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "dificultad", {
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
