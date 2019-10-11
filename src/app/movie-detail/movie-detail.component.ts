import { Component, OnInit, Input } from '@angular/core';

import { GenreService } from '../services/genre.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any;
  movies: any;
  reviews: any;
  getparam: number;
  allpage: number;
  id = +this.route.snapshot.paramMap.get('id');


  contents = [];

  constructor(private genreService: GenreService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getMovie();
    this.getSimilars();
    this.getReviews();
  }

  getMovie(): void {
    this.genreService.getMovieDetail(this.id).subscribe(data => this.movie = data);
  }

  getSimilars(): void {
    this.genreService.getSimilarMovie(this.id).subscribe(data => this.movies = data);
  }

  getReviews(): void {
    this.genreService.getReviews(this.id).subscribe(data => this.reviews = data);
  }
}
