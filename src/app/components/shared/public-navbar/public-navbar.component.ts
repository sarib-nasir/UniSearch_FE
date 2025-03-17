import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-public-navbar',
  imports: [CommonModule, NzLayoutModule, NzMenuModule,NzDropDownModule,NzIconModule ],
  templateUrl: './public-navbar.component.html',
  styleUrl: './public-navbar.component.css'
})
export class PublicNavbarComponent {

  constructor() { }

  ngOnInit() {
  }
  isMobile = window.innerWidth < 768;
  menuOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.menuOpen = false; // Close menu on resize to desktop
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
