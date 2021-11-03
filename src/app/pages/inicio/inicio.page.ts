import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'INICIO',
      redirecTo: '/descripcion'
    },
    {
      icon: 'log-in-outline',
      name: 'SIGN-UP',
      redirecTo: '/input'
    },
    {
      icon: 'newspaper-outline',
      name: 'NEWS',
      redirecTo: '/noticias'
    },
    {
      icon: 'information-circle-outline',
      name: 'DATOS',
      redirecTo: '/datos'
    }
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}



