import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogEventService } from '../blog-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
