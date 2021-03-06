import { Component, OnInit } from '@angular/core';

import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: any;

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe((data) => this.genres = data);
  }
}
