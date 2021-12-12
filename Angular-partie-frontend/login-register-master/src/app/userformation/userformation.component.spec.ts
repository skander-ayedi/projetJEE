import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformationComponent } from './userformation.component';

describe('UserformationComponent', () => {
  let component: UserformationComponent;
  let fixture: ComponentFixture<UserformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
