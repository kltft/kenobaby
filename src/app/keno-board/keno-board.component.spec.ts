import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KenoBoardComponent } from './keno-board.component';

describe('KenoBoardComponent', () => {
  let component: KenoBoardComponent;
  let fixture: ComponentFixture<KenoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KenoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
