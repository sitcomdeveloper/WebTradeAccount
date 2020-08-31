import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoaccountComponent } from './demoaccount.component';

describe('DemoaccountComponent', () => {
  let component: DemoaccountComponent;
  let fixture: ComponentFixture<DemoaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
