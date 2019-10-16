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

  movie: any = {};
  movies: any = {};
  reviews: any;
  getparam: number;
  allpage: number;
  videos: any;
  cast: any;
  id = +this.route.snapshot.paramMap.get('id');
  loading = true;


  constructor(private router: Router, private genreService: GenreService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.genreService.getMovieDetail(params.id).subscribe(data => {
        this.movie = data;
        this.genreService.getCast(params.id).subscribe(cast => {
          this.cast = cast;
          this.genreService.getVideos(params.id).subscribe(videos => {
            this.videos = videos;
            this.getSimilars(params.id);
            this.getReviews(params.id);
            this.loading = false;
          });
        });
      });
    });
  }

  onClick(id: number) {
    this.loading = true;
    this.router.navigate(['/movie/' + id]);
    this.id = id;
    this.ngOnInit();
  }

  getMovie(id: number): void {
    this.genreService.getMovieDetail(id).subscribe(data => {
      this.movie = data;
    });
  }

  getSimilars(id: number): void {
    this.genreService.getRecommendations(id).subscribe(data => this.movies = data);
  }

  getReviews(id: number): void {
    this.genreService.getReviews(id).subscribe(data => this.reviews = data);
  }

}
