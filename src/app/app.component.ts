import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

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

}


