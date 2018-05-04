import { Component } from '@angular/core';
import { Museum } from '../models/museum-location-info.model'

@Component({
  selector: 'app-museum-loc',
  templateUrl: './museum-loc.component.html',
  styleUrls: ['./museum-loc.component.css']
})
export class MuseumLocComponent {

  museums: Museum[] = [
    new Museum(locationName: 'The Met Fifth Avenue', description: 'Over 5,000 years of art from every corner of the world' ),
    new Museum()
  ]





}
