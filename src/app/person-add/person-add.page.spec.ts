import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonAddPage } from './person-add.page';

describe('PersonAddPage', () => {
  let component: PersonAddPage;
  let fixture: ComponentFixture<PersonAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
