/* Definición de tipos EstadoTarea y DificultadTarea para representar los estados y dificultades posibles de una tarea.*/
type EstadoTarea = 'pendiente' | 'en curso' | 'terminada' | 'cancelada';
type DificultadTarea = 'fácil' | 'medio' | 'difícil';
/* Definición de la clase Tarea para representar una tarea con propiedades como título, descripción, estado, fecha de creación y dificultad.*/
export class Tarea {
  private _titulo: string;
  private _descripcion: string | null;
  private _estado: EstadoTarea;
  private _fechaCreacion: Date;
  private _dificultad: DificultadTarea;
/*
    Constructor de la clase Tarea que inicializa las propiedades con los valores proporcionados y realiza normalización de algunos parámetros.
  */
  constructor(titulo: string, descripcion: string | null, estado: EstadoTarea, dificultad: DificultadTarea) {
    this._titulo = titulo;
    this._descripcion = descripcion || null;
    this._estado = this.validarEstado(estado);
    this._fechaCreacion = new Date();
    this._dificultad = this.validarDificultad(dificultad);
  }

  private validarEstado(estado: EstadoTarea): EstadoTarea {
    return ['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado)
      ? estado
      : 'pendiente';
  }

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

  editar({ nuevaDescripcion, nuevoEstado, nuevaDificultad }: { nuevaDescripcion?: string, nuevoEstado?: EstadoTarea, nuevaDificultad?: DificultadTarea }): Tarea {
    return new Tarea(
      this._titulo,
      nuevaDescripcion && nuevaDescripcion.trim() !== '' ? nuevaDescripcion : null,
      nuevoEstado || this._estado,
      nuevaDificultad || this._dificultad
    );
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(titulo: string) {
    this._titulo = titulo;
  }

  get descripcion(): string | null {
    return this._descripcion;
  }

  set descripcion(descripcion: string | null) {
    this._descripcion = descripcion;
  }

  get estado(): EstadoTarea {
    return this._estado;
  }

  set estado(estado: EstadoTarea) {
    this._estado = estado;
  }

  get fechaCreacion(): Date {
    return this._fechaCreacion;
  }

  get dificultad(): DificultadTarea {
    return this._dificultad;
  }

  set dificultad(dificultad: DificultadTarea) {
    this._dificultad = dificultad;
  }
}
