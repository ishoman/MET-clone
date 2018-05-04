import { Component } from '@angular/core';
import { Event } from '../models/events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {

events: Event[] = [
  new Event('Fellows Colloquium—Creation, Devotion, and Destruction of Objects', 'Bonnie J. Sacerdote Lecture Hall, Uris Center for Education / Free with Museum admission', '10:00 A.M.', 'SYMPOSIUM'),
  new Event('The Met Store Spring Rug Event', 'The Met Store / Free with Museum admission', '10:00 A.M.', 'MET STORE EVENT'),
  new Event('Masterpieces of the Middle Ages', 'Tours Sign, Great Hall / Free with Museum admission', '10:45 A.M.', 'GUIDED TOUR'),
  new Event('博物館精華 (Museum Highlights in Chinese/Mandarin', 'International Tours Sign, Great Hall / Free with Museum admission', '10:45 A.M.', 'GUIDED TOUR')
]
  constructor() {
    console.log(this.events)
   }


}
