import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit  {
  
  constructor() { }

  ngOnInit(): void {
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav a');
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('is-active');
      mobileMenu?.classList.toggle('is-active');
    });
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.remove('is-active');
        menuBtn?.classList.remove('is-active');
      });
    });
  }

}
