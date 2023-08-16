import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftHomeComponent } from './nft-home.component';

describe('NftHomeComponent', () => {
  let component: NftHomeComponent;
  let fixture: ComponentFixture<NftHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
