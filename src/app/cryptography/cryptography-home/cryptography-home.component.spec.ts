import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptographyHomeComponent } from './cryptography-home.component';

describe('CryptographyHomeComponent', () => {
  let component: CryptographyHomeComponent;
  let fixture: ComponentFixture<CryptographyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptographyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptographyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
