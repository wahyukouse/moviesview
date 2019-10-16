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
  film: any;
  movies: any;
  contents = [];
  getparam: number;
  allpage: number;
  title: string;
  id = +this.route.snapshot.paramMap.get('id');
  type = this.route.snapshot.paramMap.get('type');
  loading: boolean;


  constructor(private router: Router, private genreService: GenreService, private route: ActivatedRoute, private fb: FormBuilder) {
  }


  ngOnInit() {
    this.getparam = +this.route.snapshot.paramMap.get('page');
    this.getData();
    console.log(this.pagination(this.allpage, this.getparam));
    this.route.params.subscribe(param => {
      // tslint:disable-next-line: triple-equals
      if (param.type == 'discover') {
        this.loading = true;
        this.title = 'Discover';
        this.getDiscoverMovie();
        // tslint:disable-next-line: triple-equals
      } else if (param.type == 'toprate') {
        this.loading = true;
        this.title = 'Top Rates';
        this.getTopRate();
        // tslint:disable-next-line: triple-equals
      } else if (param.type == 'upcoming') {
        this.loading = true;
        this.title = 'Upcoming';
        this.getUpcoming();
        // tslint:disable-next-line: triple-equals
      } else if (param.type == 'nowplaying') {
        this.loading = true;
        this.title = 'Now Playing';
        this.getNowPlaying();
      }
    });
  }

  getData() {
    this.genreService.getTotalPages().subscribe(data => {
      for (let i = 1; i <= data; i++) {
        this.contents.push({ page: i });
        this.allpage = data;
      }
    });
  }

  clickPage(page: number, type: string, condition: boolean) {
    if (condition) {
      this.router.navigate([`/movies/${type}/page/${page - 1}`]);
      this.ngOnInit();
    } else {
      this.router.navigate([`/movies/${type}/page/${page + 1}`]);
      this.ngOnInit();
    }
  }

  onClick(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

  getDiscoverMovie() {
    this.genreService.getDiscoverMovies(this.getparam, 'popularity.desc').subscribe((data: any) => {
      this.movies = data;
      this.loading = false;
    });
  }

  getTopRate() {
    this.genreService.getTopRate(this.getparam).subscribe(data => {
      this.movies = data;
      this.loading = false;
    });
  }

  getUpcoming() {
    this.genreService.getUpcoming(this.getparam).subscribe(data => {
      this.movies = data;
      this.loading = false;
    });
  }

  getNowPlaying() {
    this.genreService.getNowPlaying(this.getparam).subscribe(data => { this.movies = data; this.loading = false; });
  }

  pagination(
    totalItems: number,
    currentPage: number,
    pageSize: number = 20,
    maxPages: number = 10
  ) {
    const totalPages = Math.ceil(totalItems / pageSize);
    console.log(totalPages);

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;

    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    return {
      page: pages
    };
  }
}
