import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCekComponent } from './movies-cek.component';

describe('MoviesCekComponent', () => {
  let component: MoviesCekComponent;
  let fixture: ComponentFixture<MoviesCekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesCekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
