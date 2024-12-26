import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  
   //Método que vai pegar e retornar um array(lista) de menus
  getItems(): Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: 'início',
        url: '#banner'
      },
      {
        name: 'Sobre mim',
        url: '#about'
      },
      {
        name: 'Habilidades',
        url: '#skills'
      },
      {
        name: 'Projetos',
        url: '#projects'
      },
      {
        name: 'Contactos',
        url: '#contact'
      }
    ];

    return menu;

  }
}
