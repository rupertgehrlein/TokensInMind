import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-sha256',
  templateUrl: './sha256.component.html',
  styleUrls: ['./sha256.component.css']
})
export class Sha256Component {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

}
