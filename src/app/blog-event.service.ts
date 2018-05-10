import { Injectable } from '@angular/core';
import { Event } from './models/events.model';
import { Blog } from './models/blogs.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogEventService {
  events: FirebaseListObservable<any[]>;
  blogs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
    this.blogs = database.list('blogs');
   }

   getEvents() {
     return this.events;
   }
   getBlogs() {
     return this.blogs;
   }

}
