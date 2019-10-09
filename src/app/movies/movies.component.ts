import { Component, OnInit } from '@angular/core';

import { GenreService } from '../services/genre.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getDiscoverMovies().subscribe((data) => this.movies = data);
  }

}
