import { Injectable } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  setLanguage(language: string) {
    this.translate.use(language);
  }

  getLanguage(): string {
    return this.translate.currentLang;
  }
}
