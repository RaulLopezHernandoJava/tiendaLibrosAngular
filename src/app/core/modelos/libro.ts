export class Libro {
  id: number;
  ISBN: string;
  titulo: string;
  autor: string;
  fechaLanzamiento: string;
  precio: number;
  img:string;
  descripcion:string;
  categoriaId: number;
}

export const LIBRO_VACIO = { id: 0, ISBN:'', titulo:'', autor: '', fechaLanzamiento: '', precio: 0, img:'', descripcion:'',categoriaId: 0 };
