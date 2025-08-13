import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  toggleMenu() {
    if (document.querySelector('.MenuBurger')) {
      // Toggle the active class on the nav menu
      const menuBurger = document.querySelector('.MenuBurger') as HTMLElement;
      const navMenu = document.querySelector('.nav-menu') as HTMLElement;
      
      if (navMenu) {
        navMenu.classList.toggle('active');
      }
      
      // Also toggle active class on the MenuBurger itself for animation
      menuBurger.classList.toggle('active');
    }
  }


}
