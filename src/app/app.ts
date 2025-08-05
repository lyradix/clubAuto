import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from "./footer/footer";
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'clubauto';
}
