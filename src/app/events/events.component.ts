import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  // Event {
  //     constructor(public eventName: string, public eventDetails: string, public eventTime: string, eventCategory: string){}
  // }

}
