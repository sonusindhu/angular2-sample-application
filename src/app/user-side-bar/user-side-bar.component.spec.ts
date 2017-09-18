import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideBarComponent } from './user-side-bar.component';

describe('UserSideBarComponent', () => {
  let component: UserSideBarComponent;
  let fixture: ComponentFixture<UserSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
