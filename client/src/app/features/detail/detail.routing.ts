import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'detail/:id', component: DetailComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

export const DetailRoutes = RouterModule.forRoot(routes);
