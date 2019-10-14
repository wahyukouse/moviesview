import { Component, OnInit, Input } from '@angular/core';

import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() hi: any;
  genres: any;

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe((data) => this.genres = data);
  }

}
