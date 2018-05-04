import { Component } from '@angular/core';
import { Blog } from '../models/blogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  blogs: Blog[] = [
    new Blog('This Week at The Met', 'From exhibition tours and gallery talks to immersive performances and family programs, The Met offers a wide range of events every day across its three locations. The following listings are just a sample of what\'s on this week.', 'MAY 4', 'NOW AT THE MET'),
    new Blog('When Feathers Were the Treasures of the Rainforest', 'Conservator Christine Giuntini discusses objects from Golden Kingdoms: Luxury and Legacy in the Ancient Americas that reveal the intrinsic beauty of featherwork and the significant ritual role of feathered textiles in Precolumbian culture.', 'MAY 3', 'NOW AT THE MET'),
    new Blog('How Cultures Met in the Atlantic World', 'Digital Editor Pac Pobric introduces a new Heilbrunn Timeline of Art History essay about the crossing of cultures in the early modern period.', 'MAY 2', 'COLLECTION INSIGHTS')
  ]

  constructor() {
    console.log(this.blogs)
  }


}
