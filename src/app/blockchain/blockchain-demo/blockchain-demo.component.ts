import { Component, OnChanges, OnInit } from '@angular/core';
import * as sha256 from 'crypto-js/sha256';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-blockchain-demo',
  templateUrl: './blockchain-demo.component.html',
  styleUrls: ['./blockchain-demo.component.css']
})
export class BlockchainDemoComponent implements OnInit, OnChanges {

  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
  }

  hashCorrectBlockOne = true;
  hashCorrectBlockTwo = true;
  hashCorrectBlockThree = true;

  disableButtonTwo = false;
  disableButtonThree = false;

  blockchainBlocks = [
    {
      index: 1,
      nonce: 0,
      data: '',
      hash: '',
      prevHash: '0000000000000000000000000000000000000000000000000000000000000000'
    },
    {
      index: 2,
      nonce: 0,
      data: '',
      hash: '',
      prevHash: ''
    },
    {
      index: 3,
      nonce: 0,
      data: '',
      hash: '',
      prevHash: ''
    },
  ]

  ngOnInit() {
    this.computeNonceBlockOne();
    this.computeNonceBlockTwo();
    this.computeNonceBlockThree();
  }

  ngOnChanges() {
    /* this.computeNonceBlockOne();
    this.computeNonceBlockTwo();
    this.computeNonceBlockThree(); */
    this.updateHashBlockOne();
    this.updateHashBlockTwo();
    this.updateHashBlockThree();
  }

  onInputBlockOne(event) {
    this.blockchainBlocks[0].data = event;
    this.updateHashBlockOne();
    this.updateHashBlockTwo();
    this.updateHashBlockThree();
    this.hashCorrectBlockOne = false;
    this.hashCorrectBlockTwo = false;
    this.hashCorrectBlockThree = false;
    this.disableButtonTwo = true;
    this.disableButtonThree = true;
    this.blockchainBlocks[1].prevHash = this.blockchainBlocks[0].hash;
    this.blockchainBlocks[2].prevHash = this.blockchainBlocks[1].hash;
  }

  updateHashBlockOne() {
    const combinedData = `${this.blockchainBlocks[0].nonce}${this.blockchainBlocks[0].data}${this.blockchainBlocks[0].hash}${this.blockchainBlocks[0].prevHash}`;
    this.blockchainBlocks[0].hash = sha256(combinedData).toString();
  }

  computeNonceBlockOne() {
    while (this.blockchainBlocks[0].hash.substring(0, 4) !== '0000') {
      this.blockchainBlocks[0].nonce++;
      this.updateHashBlockOne();
    };
    this.blockchainBlocks[1].prevHash = this.blockchainBlocks[0].hash;
    this.hashCorrectBlockOne = true;
    this.disableButtonTwo = false;
  }

  onInputBlockTwo(event) {
    this.blockchainBlocks[1].data = event;
    this.updateHashBlockTwo();
    this.updateHashBlockThree();
    this.hashCorrectBlockTwo = false;
    this.hashCorrectBlockThree = false;
    this.disableButtonThree = true;
    this.blockchainBlocks[2].prevHash = this.blockchainBlocks[1].hash;
  }

  updateHashBlockTwo() {
    const combinedData = `${this.blockchainBlocks[1].nonce}${this.blockchainBlocks[1].data}${this.blockchainBlocks[1].hash}${this.blockchainBlocks[1].prevHash}`;
    this.blockchainBlocks[1].hash = sha256(combinedData).toString();
  }

  computeNonceBlockTwo() {
    while (this.blockchainBlocks[1].hash.substring(0, 4) !== '0000') {
      this.blockchainBlocks[1].nonce++;
      this.updateHashBlockTwo();
    };
    this.blockchainBlocks[2].prevHash = this.blockchainBlocks[1].hash;
    this.hashCorrectBlockTwo = true;
    this.disableButtonThree = false;
  }

  onInputBlockThree(event) {
    this.blockchainBlocks[2].data = event;
    this.updateHashBlockThree();
    this.hashCorrectBlockThree = false;
  }

  updateHashBlockThree() {
    const combinedData = `${this.blockchainBlocks[2].nonce}${this.blockchainBlocks[2].data}${this.blockchainBlocks[2].hash}${this.blockchainBlocks[2].prevHash}`;
    this.blockchainBlocks[2].hash = sha256(combinedData).toString();
  }

  computeNonceBlockThree() {
    while (this.blockchainBlocks[2].hash.substring(0, 4) !== '0000') {
      this.blockchainBlocks[2].nonce++;
      this.updateHashBlockThree();
    };
    this.hashCorrectBlockThree = true;
  }
}
