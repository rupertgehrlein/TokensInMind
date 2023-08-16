import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyHomeComponent } from './cryptocurrency-home.component';

describe('CryptocurrencyHomeComponent', () => {
  let component: CryptocurrencyHomeComponent;
  let fixture: ComponentFixture<CryptocurrencyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrencyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
