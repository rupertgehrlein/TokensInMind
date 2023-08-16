import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainHomeComponent } from './blockchain-home.component';

describe('BlockchainHomeComponent', () => {
  let component: BlockchainHomeComponent;
  let fixture: ComponentFixture<BlockchainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
