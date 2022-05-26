import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  
  formulario = {
    nombre: '',
    apellido: '',
    correo: '',
    mensaje: ''
  }

  public isOpen:boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;
  }
  onSubmitTemplate(){
    console.log('Form Submit: ');
    console.log( this.formulario);
    this.isOpen = true;
  }

}
