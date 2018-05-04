import { Component } from '@angular/core';
import { MuseumAddress } from '../models/museum-location-address.model'

@Component({
  selector: 'app-museum-addresses',
  templateUrl: './museum-addresses.component.html',
  styleUrls: ['./museum-addresses.component.css']
})
export class MuseumAddressesComponent {

museumAddresses: MuseumAddress[] = [
  new MuseumAddress('The Met Fifth Avenue', 'street', 'city', 'state', 'zipcode', 'phone'),
  new MuseumAddress('The Met Breuer', 'street', 'city', 'state', 'zipcode', 'phone'),
  new MuseumAddress('The Met Cloisters', 'street', 'city', 'state', 'zipcode', 'phone'),

]

  constructor() {
    console.log(this.museumAddresses)
  }

}
