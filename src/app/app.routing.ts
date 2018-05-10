import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component'
import { EventsComponent } from './events/events.component'

const appRoutes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
