import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { HomeComponent } from '../components/pages/home/home.component';
import { AboutComponent } from '../components/pages/about/about.component';
import { NewMomentComponent } from '../components/pages/new-moment/new-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moments/new', component: NewMomentComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
