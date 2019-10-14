import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration'];

  movies: any;
  contents = [];
  getparam = +this.route.snapshot.paramMap.get('page');
  allpage: number;
  title: string;
  id = +this.route.snapshot.paramMap.get('id');
  type = this.route.snapshot.paramMap.get('type');


  constructor(private router: Router, private genreService: GenreService, private route: ActivatedRoute, private fb: FormBuilder) {
  }


  ngOnInit() {
    this.getData();
    // tslint:disable-next-line: triple-equals
    if (this.type == 'discover') {
      this.title = 'Discover';
      this.getDiscoverMovie();
    // tslint:disable-next-line: triple-equals
    } else if (this.type == 'toprate') {
      this.title = 'Top Rates';
      this.getTopRate();
    // tslint:disable-next-line: triple-equals
    } else if (this.type == 'upcoming') {
      this.title = 'Upcoming';
      this.getUpcoming();
    // tslint:disable-next-line: triple-equals
    } else if (this.type == 'nowplaying') {
      this.title = 'Now Playing';
      this.getNowPlaying();
    }
  }

  getData() {
    this.genreService.getTotalPages().subscribe(data => {
      for (let i = 1; i <= data; i++) {
        this.contents.push({ page: i });
        this.allpage = data;
      }
    });
  }

  onClick(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

  getDiscoverMovie() {
    this.genreService.getDiscoverMovies(this.getparam, 'popularity.desc').subscribe(data => this.movies = data);
  }

  getTopRate() {
    this.genreService.getTopRate(this.getparam).subscribe(data => this.movies = data);
  }

  getUpcoming() {
    this.genreService.getUpcoming(this.getparam).subscribe(data => this.movies = data);
  }

  getNowPlaying() {
    this.genreService.getNowPlaying(this.getparam).subscribe(data => this.movies = data);
  }

}
