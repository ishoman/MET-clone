import { Component } from '@angular/core';
import { Museum } from '../models/museum-location-info.model'

@Component({
  selector: 'app-museum-loc',
  templateUrl: './museum-loc.component.html',
  styleUrls: ['./museum-loc.component.css']
})
export class MuseumLocComponent {

museums: Museum[] = [
  new Museum('The Met Fifth Avenue', 'Over 5,000 years of art from every corner of the world', 'Open Today 10AM-9PM'),
  new Museum('The Met Breur', 'Modern and contemporary art reimagined in an architechtural icon','Open Today 10AM-9PM'),
  new Museum('The Met Cloisters', 'Wonders of medieval Europe through its art, architecture, and gardens','Open Today 10AM-5:15PM'),
];

constructor(){
  console.log(this.museums)
}




}
