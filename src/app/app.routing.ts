import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component'
import { EventsComponent } from './events/events.component'
import { HomepageComponent } from './homepage/homepage.component'
import { LocationsComponent } from './locations/locations.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
