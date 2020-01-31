import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSwapSelectComponent } from './multi-swap-select.component';

describe('MultiSwapSelectComponent', () => {
  let component: MultiSwapSelectComponent;
  let fixture: ComponentFixture<MultiSwapSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSwapSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSwapSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
