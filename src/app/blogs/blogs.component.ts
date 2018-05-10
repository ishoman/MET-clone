import { Component } from '@angular/core';
import { Blog } from '../models/blogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  ngOnInit(){
    
  }

  constructor() {
    console.log(this.blogs)
  }


}
