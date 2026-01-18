import { Routes } from '@angular/router';

import { HomePage } from './pages/HomePage';
import { VehiclePage } from './pages/VehiclePage';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'vehicle/:id', component: VehiclePage }
];
