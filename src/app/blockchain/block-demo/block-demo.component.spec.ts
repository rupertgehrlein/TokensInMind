import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDemoComponent } from './block-demo.component';

describe('BlockDemoComponent', () => {
  let component: BlockDemoComponent;
  let fixture: ComponentFixture<BlockDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
