import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ROUTES
import { HomePageComponent }    from './home-page/home-page.component';
import { AboutPageComponent }   from './about-page/about-page.component';
import { FaqPageComponent }     from './faq-page/faq-page.component';
import { GetInvolvedPageComponent }     from './get-involved-page/get-involved-page.component';
import { PagePostgrowthComponent } from './page-postgrowth/page-postgrowth.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'faq',  component: FaqPageComponent },
  { path: 'get-involved',  component: GetInvolvedPageComponent },
  { path: 'postgrowth', component: PagePostgrowthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
