import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit, OnDestroy {
  private scrollCount = 0;
  private lastScrollY = 0;
  private scrollThreshold = 3;
  private scrollListener: any;

  ngOnInit() {
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  private handleScroll() {
    const navBar = document.querySelector('.nav-bar') as HTMLElement;
    const navMenu = document.querySelector('.nav-menu') as HTMLElement;
    
    if (!navBar || !navMenu) return;
    
    // Check if we've scrolled past the threshold
    if (window.scrollY > 399) {
      const currentScrollY = window.scrollY;
      
      // Count only downward scrolls
      if (currentScrollY > this.lastScrollY) {
        this.scrollCount++;
        
        // Hide after 3 downward scrolls
        if (this.scrollCount >= this.scrollThreshold) {
          navBar.classList.add('hidden');
          navMenu.classList.add('up');
        }
      } else {
        // Show on any upward scroll
        navBar.classList.remove('hidden');
        navMenu.classList.remove('up');
        this.scrollCount = 0;
      }
      
      // Update last scroll position
      this.lastScrollY = currentScrollY;
    } else {
      // Show when at the top of the page
      navBar.classList.remove('hidden');
      navMenu.classList.remove('up');
      this.scrollCount = 0;
    }
  }

}
