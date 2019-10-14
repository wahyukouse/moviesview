import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: any[];
  toprates: any[];

  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit() {
    this.genreService.getNowPlaying(1).subscribe(data => this.movies = data);
    this.genreService.getTopRate(1).subscribe(data => this.toprates = data);
  }

  onClick(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

}
