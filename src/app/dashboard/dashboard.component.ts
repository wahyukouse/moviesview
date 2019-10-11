import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: any[];

  slide = ['1', '2', '3'];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getDiscoverMovies(1, 'popularity.desc').subscribe(data => this.movies = data);
    console.log(this.slide.length);
  }

}
