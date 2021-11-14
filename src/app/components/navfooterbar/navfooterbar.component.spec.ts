import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfooterbarComponent } from './navfooterbar.component';

describe('NavfooterbarComponent', () => {
  let component: NavfooterbarComponent;
  let fixture: ComponentFixture<NavfooterbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavfooterbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfooterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
