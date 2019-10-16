import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: any;
  toprates: any;
  loading: boolean;
  constructor(private genreService: GenreService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.loading = true;
    this.genreService.getNowPlaying(1).subscribe(data => {
      this.movies = data;
      this.genreService.getTopRate(1).subscribe(toprate => {
        this.toprates = toprate;
        this.loading = false;
      });
     });
  }

  onClick(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

}
