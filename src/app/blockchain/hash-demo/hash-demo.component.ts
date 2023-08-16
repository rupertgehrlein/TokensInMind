import { Component, OnInit } from '@angular/core';
import * as sha256 from 'crypto-js/sha256';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-hash-demo',
  templateUrl: './hash-demo.component.html',
  styleUrls: ['./hash-demo.component.css']
})
export class HashDemoComponent implements OnInit {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

  /* Erste Übung */

  data1 = '';
  prevHash1 = '0000000000000000000000000000000000000000000000000000000000000000';
  hash1 = '';

  ngOnInit() {
    this.computeHashOne('');
  }

  computeHashOne(event) {
    this.data1 = event;
    const combinedData = `${this.data1}${this.prevHash1}`;
    this.hash1 = sha256(combinedData).toString();
  }

  /* Zweite Übung */

  data2 = '';
  prevHash2 = '0000000000000000000000000000000000000000000000000000000000000000';
  hash2 = '';
  newHash2;
  nonce2 = 0;

  onInputTwo(event) {
    this.data2 = event;
  }

  computeHashTwo() {
    while (this.hash2.substring(0, 3) !== '000') {
      this.updateHashTwo();
      this.nonce2++
    }
    this.nonce2 = 0;
    this.newHash2 = this.hash2;
    this.hash2 = '';
  }

  updateHashTwo() {
    const combinedData = `${this.data2}${this.prevHash2}${this.nonce2}`;
    this.hash2 = sha256(combinedData).toString();
  }

  /* Dritte Übung */

  data3 = '';
  prevHash3 = '0000000000000000000000000000000000000000000000000000000000000000';
  hash3 = '';
  newHash3;
  nonce3 = 0;

  onInputThree(event) {
    this.data3 = event;
  }

  computeHashThree() {
    while (this.hash3.substring(0, 3) !== '000') {
      this.updateHashThree();
      this.nonce3++
    }
    this.nonce3 = 0;
    this.newHash3 = this.hash3;
    this.hash3 = '';
  }

  updateHashThree() {
    const combinedData = `${this.data3}${this.newHash2}${this.nonce3}`;
    this.hash3 = sha256(combinedData).toString();
  }

}
