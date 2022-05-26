import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'A cerca de', url: 'acerca', icon: 'accessibility' },
    { title: 'Productos', url: 'productos', icon: 'layers' },
    { title: 'Servicios', url: 'servicios', icon: 'cube' },
    { title: 'Contacto', url: 'contacto', icon: 'mail' },
  ];
  constructor() {}
}
