import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'movies/:type/page/:page', component: MoviesComponent},
  {path: 'pages', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
