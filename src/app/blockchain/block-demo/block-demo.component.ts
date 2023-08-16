import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';


declare var bulmaModal: any;

@Component({
  selector: 'app-block-demo',
  templateUrl: './block-demo.component.html',
  styleUrls: ['./block-demo.component.css']
})
export class BlockDemoComponent {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

}
