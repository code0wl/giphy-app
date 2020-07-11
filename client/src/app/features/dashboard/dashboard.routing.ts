import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CanActivateGuard } from './service/activate.guard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'page/0', pathMatch: 'full' },
      {
        path: 'page/:offset',
        component: DashboardComponent,
        canActivate: [CanActivateGuard]
      }
    ]
  }
];

export const DashboardRoutes = RouterModule.forRoot(dashboardRoutes);
