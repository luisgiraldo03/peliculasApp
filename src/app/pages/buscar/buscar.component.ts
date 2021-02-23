import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public movies: Movie[] = [];

  public texto: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.texto = params.texto;

      this.peliculasService.buscarPeliculas(params.texto).subscribe(movies => {
        this.movies = movies;
        console.log(movies)
      })
    })
  }

}
