import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapComponentComponent } from './swap-component.component';

describe('SwapComponentComponent', () => {
  let component: SwapComponentComponent;
  let fixture: ComponentFixture<SwapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
