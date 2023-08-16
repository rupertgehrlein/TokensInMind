import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedLanguage;

  constructor(private languageService: LanguageService) { }

  changeLanguage() {
    if (this.selectedLanguage == 'de') {
      this.languageService.setLanguage('en');
      this.selectedLanguage = 'en';
    } else {
      this.languageService.setLanguage('de');
      this.selectedLanguage = 'de';
    }

  }

}
