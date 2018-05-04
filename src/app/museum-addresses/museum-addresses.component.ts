import { Component } from '@angular/core';
import { MuseumAddress } from '../models/museum-location-address.model'

@Component({
  selector: 'app-museum-addresses',
  templateUrl: './museum-addresses.component.html',
  styleUrls: ['./museum-addresses.component.css']
})
export class MuseumAddressesComponent {

museumAddresses: MuseumAddress[] = [
  new MuseumAddress('The Met Fifth Avenue', '1000 Fifth Avenue', 'New York', 'NY', '10028', '212-535-7710'),
  new MuseumAddress('The Met Breuer', '945 Madison Avenue', 'New York', 'NY', '10021', '212-731-1675'),
  new MuseumAddress('The Met Cloisters', '99 Margaret Corbin Drive, Fort Tryon Park', 'New York', 'NY', '10040', '212-923-3700'),

]

  constructor() {
    console.log(this.museumAddresses)
  }

}
