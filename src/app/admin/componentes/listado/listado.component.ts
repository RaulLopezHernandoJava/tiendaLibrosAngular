
import { LibroService } from '../../../core/servicios/libro/libro.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../../../core/modelos/libro';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo:string;
  isbn:string;

  libros:Libro[];
  filterLibros:string = ''

  constructor(
    private libroService:LibroService
  ) { }

  ngOnInit(): void {
      this.cargarListado();
  }

  borrar(libro: Libro): void {
    if (confirm('¿Estás seguro de que quieres borrar el libro ' + libro.id)) {
      this.libroService.delete(libro.id).subscribe(this.cargarListado.bind(this))
    }
  }

  buscarPorISBN(){
    this.libroService.buscarLibroPorISBN(this.isbn)
    .subscribe(libros =>{
      this.libros = libros;
    })

  }
  buscarPorNombre(){
    this.libroService.buscarLibroPorTitulo(this.titulo)
    .subscribe(libros =>{
      this.libros = libros;
    })

  }

  cargarListado(): void {
    this.libroService.get().subscribe(
      librosRecibidos => this.libros = librosRecibidos

      );
  }

}
