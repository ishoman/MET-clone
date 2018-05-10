import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogEventService } from '../blog-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [BlogEventService]
})

export class EventsComponent implements OnInit {
events: FirebaseListObservable<any[]>

  constructor(private blogEventService: BlogEventService) {
    console.log(this.events)
   }

   ngOnInit(){

   }

}
