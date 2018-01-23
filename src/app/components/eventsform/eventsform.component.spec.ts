import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsformComponent } from './eventsform.component';

describe('EventsformComponent', () => {
  let component: EventsformComponent;
  let fixture: ComponentFixture<EventsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
