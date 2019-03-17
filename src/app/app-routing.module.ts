import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ROUTES
import { HomePageComponent }    from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
