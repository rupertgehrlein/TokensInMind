import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-blockchain-home',
  templateUrl: './blockchain-home.component.html',
  styleUrls: ['./blockchain-home.component.css']
})
export class BlockchainHomeComponent {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

}
