import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { AddLocationComponent } from './add-location/add-location.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'add-location',
    component: AddLocationComponent
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
