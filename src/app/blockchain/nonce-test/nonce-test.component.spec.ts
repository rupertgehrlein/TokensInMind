import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonceTestComponent } from './nonce-test.component';

describe('NonceTestComponent', () => {
  let component: NonceTestComponent;
  let fixture: ComponentFixture<NonceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonceTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
