import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GenreService } from '../services/genre.service';
import { Movie } from '../models/Discover';

@Component({
  selector: 'app-movies-cek',
  templateUrl: './movies-cek.component.html',
  styleUrls: ['./movies-cek.component.css']
})
export class MoviesCekComponent implements OnInit {

  movies: Movie[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    // this.genreService.getTestMovie().subscribe((data: any) => console.log(data));
  }

}
