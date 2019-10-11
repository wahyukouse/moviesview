import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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


  constructor(private genreService: GenreService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  oppoSuitsForm = this.fb.group({
    name: ['']
  });

  ngOnInit() {
    this.getData();
    this.genreService.getDiscoverMovies(this.getparam, 'popularity.desc').subscribe(data => this.movies = data);
  }

  getData() {
    this.genreService.getTotalPages().subscribe(data => {
      for (let i = 1; i <= data; i++) {
        this.contents.push({ page: i });
        this.allpage = data;
      }
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.oppoSuitsForm.value));
  }

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }

}
