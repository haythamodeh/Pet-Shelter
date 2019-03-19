import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedByComponent } from './baked-by.component';

describe('BakedByComponent', () => {
  let component: BakedByComponent;
  let fixture: ComponentFixture<BakedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
