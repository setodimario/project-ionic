import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss']
})
export class ServiciosPage implements OnInit {
  // Optional parameters to pass to the swiper instance.
  // See https://swiperjs.com/swiper-api for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
