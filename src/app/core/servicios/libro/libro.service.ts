import { Libro, LIBRO_VACIO } from '../../modelos/libro';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url = 'http://localhost:3000/libros/';
  private urlBusquedaLibroPorISBN ="http://localhost:3000/libros?ISBN=";
  private urlBusquedaLibroPorTitulo ="http://localhost:3000/libros?titulo=";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  get(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url).pipe(
      catchError(this.gestionarError<Libro[]>('get', []))
    )
  }

  obtenerLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(this.url + id).pipe(
      catchError(this.gestionarError<Libro>('getPorId', LIBRO_VACIO))
    );
  }

  post(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.url, libro, this.httpOptions).pipe(
      catchError(this.gestionarError<Libro>('post', LIBRO_VACIO))
    );
  }

  put(libro: Libro): Observable<Libro> {
    console.log(this);
    return this.http.put<Libro>(this.url + libro.id, libro, this.httpOptions).pipe(
      catchError(this.gestionarError<Libro>('put', LIBRO_VACIO))
    );
  }

  delete(id: number): Observable<Libro> {
    return this.http.delete<Libro>(this.url + id, this.httpOptions).pipe(
      catchError(this.gestionarError<Libro>('delete', LIBRO_VACIO))
    );
  }

  gestionarError<T>(operacion: string, resultado?: T) {
    return (error: HttpErrorResponse) => {
      alert('Ha habido un error en la operación ' + operacion);
      return of(resultado as T);
    };
  }

  buscarLibroPorISBN(ISBN:string){

    if(!ISBN.trim()){
      return this.get();
    }

    return this.http.get<Libro[]>(this.urlBusquedaLibroPorISBN + ISBN).pipe(
      catchError(this.gestionarError<Libro[]>('get', []))
    )
  }


  buscarLibroPorTitulo(titulo:string){

    if(!titulo.trim()){
      return this.get();
    }
    return this.http.get<Libro[]>(this.urlBusquedaLibroPorTitulo + titulo).pipe(
      catchError(this.gestionarError<Libro[]>('get', []))
    )
  }

  mostrarLibrosPorCategoria(idCategoria:number):any{

    return this.http.get<any>(`http://localhost:3000/categorias/${idCategoria}?_embed=libros`).pipe(
      map(datos =>datos.libros)
    )
  }
}
