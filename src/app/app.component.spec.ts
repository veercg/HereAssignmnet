import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatChipsModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        RouterOutletStubComponent,
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatChipsModule,
        MatDividerModule,
        MatIconModule,
        MatFormFieldModule,
        MatListModule,
        MatInputModule,
        MatTooltipModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
