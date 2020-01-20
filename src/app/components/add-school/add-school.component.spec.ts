import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AddSchoolComponent } from './add-school.component';
import { TextInputComponent } from '../text-input/text-input.component';


describe('AddSchoolComponent', () => {
  let component: AddSchoolComponent;
  let fixture: ComponentFixture<AddSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          AddSchoolComponent,
          TextInputComponent
      ],
      imports: [
          FormsModule,
          HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
