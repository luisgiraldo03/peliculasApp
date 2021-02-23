import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (pos > max) {
      if (this.peliculasService.cargando) { return }

      this.peliculasService.getCartelera().subscribe(resp => {
        this.movies.push(...resp);
      })
    }
  }

  constructor(private peliculasService: PeliculasService) { }

  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }

  ngOnInit() {
    this.peliculasService.getCartelera()
      .subscribe(resp => {
        console.log(resp);
        this.movies = resp;
        this.moviesSlideshow = resp;
      })
  }



}
