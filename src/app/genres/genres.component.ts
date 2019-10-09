import { Component, OnInit } from '@angular/core';

import { GenreService } from '../services/genre.service';
import { Genre } from '../models/Genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
   genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe((data) => console.log(data));
  }
}
