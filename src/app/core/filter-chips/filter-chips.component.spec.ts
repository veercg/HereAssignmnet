import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatChipsModule,
  MatIconModule,
  MatFormFieldModule
} from '@angular/material';

import { FilterChipsComponent } from './filter-chips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterChipsComponent', () => {
  let component: FilterChipsComponent;
  let fixture: ComponentFixture<FilterChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterChipsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
