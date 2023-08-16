import { Component, OnChanges, OnInit } from '@angular/core';
import * as sha256 from 'crypto-js/sha256';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-nonce-test',
  templateUrl: './nonce-test.component.html',
  styleUrls: ['./nonce-test.component.css']
})
export class NonceTestComponent {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

  nonceComplexity = 4;
  leadingZerosHash = '0000';

  getSliderValue(event) {
    this.nonceComplexity = event.target.value;
    this.leadingZerosHash = '0'.repeat(this.nonceComplexity);
  }

  hashCorrect = true;
  nonce = 0;
  data = '';
  hash = '';
  prevHash = '0000000000000000000000000000000000000000000000000000000000000000';
  newNonce;
  newHash;
  newData;
  start;
  elapsed;

  ngOnInit() {
    this.computeHash();
  }

  onInput(event: any) {
    this.newData = event;
    this.changeBackground();
  }

  ngOnChanges() {

  }

  changeBackground() {
    if(this.data != this.newData){this.hashCorrect = false}else{this.hashCorrect = true}
  }

  updateHash() {
    const combinedData = `${this.nonce}${this.newData}${this.prevHash}${this.hash}`;
    this.hash = sha256(combinedData).toString();
  }

  computeHash() {
    this.updateHash();
    while (this.hash.substring(0, this.nonceComplexity) !== this.leadingZerosHash) {
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

  compute() {
    this.start = new Date().getTime();
    this.computeHash();
    this.elapsed = new Date().getTime() - this.start;
  }

}
