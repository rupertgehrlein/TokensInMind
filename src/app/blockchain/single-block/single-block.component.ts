import { Component } from '@angular/core';
import * as sha256 from 'crypto-js/sha256';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-single-block',
  templateUrl: './single-block.component.html',
  styleUrls: ['./single-block.component.css']
})
export class SingleBlockComponent {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

  hashCorrect = true;
  nonce = 0;
  data = '';
  hash = '';
  prevHash = '0000000000000000000000000000000000000000000000000000000000000000';
  newNonce;
  newHash;
  newData;

  ngOnInit() {
    this.computeHash();
  }

  onInput(event: any) {
    this.newData = event;
    this.changeBackground();
  }

  changeBackground() {
    if(this.data != this.newData){this.hashCorrect = false}else{this.hashCorrect = true}
  }

  updateHash() {
    const combinedData = `${this.nonce}${this.newData}${this.prevHash}${this.hash}`;
    this.hash = sha256(combinedData).toString();
  }

  computeHash() {
    while (this.hash.substring(0, 4) !== '0000') {
      this.nonce++;
      this.updateHash();
    }
    this.data = this.newData;
    this.newNonce = this.nonce;
    this.newHash = this.hash;
    this.nonce = 0;
    this.hash = '';
    this.changeBackground();
  }

}
