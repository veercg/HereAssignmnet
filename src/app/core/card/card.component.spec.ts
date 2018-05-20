import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';

import { CardComponent } from './card.component';
import { Feed } from '../../interface/feed.interface';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const expectedFeed: Feed = {
      'name': 'Alvaro Echevarria',
      'title': 'Technology Analyst',
      'company' : 'J.P. Morgan',
      'city': 'London',
      'country': 'United Kingdom',
      'img': 'https://media.licdn.com/dms/image/C4D03AQHgd_b0qMGjTg/profile-displayphoto-shrink_100_100/0?e=1531958400&v=beta&t=uB1OUbJecp1-tKUA_blA3FXE4rZoUJQWu1TyQJTKakM',
      'skills': ['java', 'react', 'redux'],
      'feed_source': 'Referral'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.feed = expectedFeed;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display feed name', () => {
    const feedNameDe = fixture.debugElement.query(By.css('.name'));
    const feedNameEl = feedNameDe.nativeElement;
    const expectedFeedName = expectedFeed.name;
    expect(feedNameEl.textContent).toContain(expectedFeedName);
  });

});
