import { Component, OnInit } from '@angular/core';
import { Museum } from '../models/museum-location-info.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogEventService } from '../blog-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [BlogEventService]
})
export class LocationsComponent implements OnInit {
  locations: FirebaseListObservable<any[]>;

  constructor(private blogEventService: BlogEventService) {
   }

  ngOnInit(){
    this.locations = this.blogEventService.getLocations();
  }

}
