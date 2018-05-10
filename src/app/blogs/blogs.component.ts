import { Component } from '@angular/core';
import { Blog } from '../models/blogs.model';
import { Router } from '@angular/router';
import { BlogEventService } from '../blog-event.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogEventService]
})
export class BlogsComponent {
  blogs: FirebaseListObservable<any[]>

  constructor(private router: Router, private blogEventService: BlogEventService) {
    console.log(this.blogs)
  }

  ngOnInit(){
  this.blogs = this.blogEventService.getBlogs();
  }

}
