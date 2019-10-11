import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'genres', component: GenresComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'movies/page/:page', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
