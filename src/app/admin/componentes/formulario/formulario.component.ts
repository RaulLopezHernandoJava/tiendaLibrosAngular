import { LibroService } from './../../../core/servicios/libro/libro.service'
import { Libro, LIBRO_VACIO } from './../../../core/modelos/libro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  validado:boolean = false;
  id:number;

  libro: Libro = LIBRO_VACIO


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

  btnAceptar(esValido: boolean): void {

    this.validado = true;

    if(!esValido) {
      return;
    }

    if (this.id) {
      this.libroService.put(this.libro).subscribe(this.irAListado.bind(this));
    } else {
      this.libroService.post(this.libro).subscribe(this.irAListado.bind(this));
    }
  }

  irAListado() {
    this.router.navigate(['/admin']);
  }



}
