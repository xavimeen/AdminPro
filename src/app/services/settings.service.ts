import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.getElementById('theme');

  constructor() {
    const themeUrl = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }

  checkCurrentTheme() {
    // Cada tema tiene un check que muestra al usuario que está marcado
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach(element => {
      element.classList.remove('working');
      const currentTheme = this.linkTheme.getAttribute('href');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      if(currentTheme === btnThemeUrl) {
        element.classList.add('working');
      }
    });

  }

}
