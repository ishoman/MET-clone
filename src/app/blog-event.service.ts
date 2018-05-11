import { Injectable } from '@angular/core';
import { Event } from './models/events.model';
import { Blog } from './models/blogs.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogEventService {
  events: FirebaseListObservable<any[]>;
  blogs: FirebaseListObservable<any[]>;
  locations: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('info/0/events');
    this.blogs = database.list('info/0/blogs');
    this.locations = database.list('info/0/locations');
   }

   getBlogs() {
     return this.blogs;
   }

   getEvents() {
     return this.events;
   }

   getLocations() {
     return this.locations;
   }

}
