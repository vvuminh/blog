import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifprofileComponent } from './difprofile.component';

describe('DifprofileComponent', () => {
  let component: DifprofileComponent;
  let fixture: ComponentFixture<DifprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
