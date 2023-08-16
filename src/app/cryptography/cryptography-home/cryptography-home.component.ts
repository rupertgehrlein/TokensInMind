import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-cryptography-home',
  templateUrl: './cryptography-home.component.html',
  styleUrls: ['./cryptography-home.component.css']
})

export class CryptographyHomeComponent implements OnInit{

  ngOnInit(): void {
    /* this.currentLanguage = this.languageService.getLanguage(); */
  }

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

  alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  textEncode = '';
  textDecode = '';
  selectEncode;
  selectDecode;
  encoded;
  decoded;

  encode(){

    let string = this.textEncode.toUpperCase();
    let shift = parseInt(this.selectEncode);

    if (isNaN(shift)) {
      shift = 0;
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let encodedText: string = '';

    let i: number = 0;

    while (i < string.length) {

      if (alphabet.indexOf(string[i]) !== -1){

      let alphabetIndex = alphabet.indexOf(string[i]);
      alphabetIndex += shift;

      if (alphabetIndex > 25){
        alphabetIndex = alphabetIndex % 26;
      }

      encodedText += alphabet[alphabetIndex]
    }
    else {
      encodedText += string[i];
    }

      i++;
    }
    this.encoded = encodedText;
  }

  decode(){

    let string = this.textDecode.toUpperCase();
    let shift = parseInt(this.selectDecode);

    if (isNaN(shift)) {
      shift = 0;
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let decodedText: string = '';

    let i: number = 0;

    while (i < string.length) {

      if (alphabet.indexOf(string[i]) !== -1){

      let alphabetIndex = alphabet.indexOf(string[i]);
      alphabetIndex -= shift;

      if (alphabetIndex < 0){
        alphabetIndex = 26 + alphabetIndex;
      }

      decodedText += alphabet[alphabetIndex]
    }
    else {
      decodedText += string[i];
    }

      i++;
    }
    this.decoded = decodedText;
  }

  getSelectEncode(event) {
    this.selectEncode = event.target.value;
  }

  getTextEncode(event) {
    this.textEncode = event.target.value;
  }

  getSelectDecode(event) {
    this.selectDecode = event.target.value;
  }

  getTextDecode(event) {
    this.textDecode = event.target.value;
  }

}
