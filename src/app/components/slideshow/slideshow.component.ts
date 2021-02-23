import { AfterViewInit, Component, Input, OnInit, ɵSWITCH_COMPILE_PIPE__POST_R3__ } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];
  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true
    })
  }

  ngOnInit() {
  }

  public onSlideNext() {
    this.mySwiper.slidePrev();
  }

  public onSlidePrev() {
    this.mySwiper.slideNext();
  }

}
