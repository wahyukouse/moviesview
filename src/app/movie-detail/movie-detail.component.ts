import { Component, OnInit, Input } from '@angular/core';

import { GenreService } from '../services/genre.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
  hi = '500px';
  getparam: number;
  allpage: number;
  videos: any;
  cast: any;
  id = +this.route.snapshot.paramMap.get('id');


  contents = [];

  constructor(private router: Router, private genreService: GenreService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getMovie();
    this.getSimilars();
    this.getReviews();
    this.getVideos();
    this.getCast();
  }

  onClick(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

  getMovie(): void {
    this.genreService.getMovieDetail(this.id).subscribe(data => this.movie = data);
  }

  getSimilars(): void {
    this.genreService.getRecommendations(this.id).subscribe(data => this.movies = data);
  }

  getReviews(): void {
    this.genreService.getReviews(this.id).subscribe(data => this.reviews = data);
  }

  getVideos(): void {
    this.genreService.getVideos(this.id).subscribe(data => this.videos = data);
  }
  getCast(): void {
    this.genreService.getCast(this.id).subscribe(data => this.cast = data);
  }
}
