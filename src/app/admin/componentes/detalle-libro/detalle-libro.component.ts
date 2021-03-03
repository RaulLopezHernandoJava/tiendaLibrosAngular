import { LibroService } from './../../../core/servicios/libro/libro.service'
import { Component, OnInit } from '@angular/core';
import { Libro, LIBRO_VACIO } from 'src/app/core/modelos/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  libro: Libro = LIBRO_VACIO
  id:number;

  constructor(
    private libroService:LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      if (this.id) {
        this.libroService.obtenerLibro(this.id).subscribe(libro => this.libro = libro);
      }
    });

  }



}
