import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { VehicleDetails } from './vehicle-details/vehicle-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'vehicle-details', component: VehicleDetails },
  { path: '**', redirectTo: '' }
];
