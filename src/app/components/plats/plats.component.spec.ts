import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsComponent } from './plats.component';


describe('PlatsComponent', () => {
  let component: PlatsComponent;
  let fixture: ComponentFixture<PlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
