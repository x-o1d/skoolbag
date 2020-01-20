import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ListSchoolsComponent } from './list-schools.component';
import { TextInputComponent } from '../text-input/text-input.component';


describe('ListSchoolsComponent', () => {
  let component: ListSchoolsComponent;
  let fixture: ComponentFixture<ListSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ListSchoolsComponent,
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
    fixture = TestBed.createComponent(ListSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
