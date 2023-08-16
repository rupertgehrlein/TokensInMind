import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private languageService: LanguageService) {}

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

}
