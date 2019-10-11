import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../models/Genre';
import { Movie } from '../models/Discover';

export interface ServiceData {
  genres: Genre[];
  movies: Movie[];
}

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apikey = 'b78a2c1e6b214a5b6bcf015adb9d40c3';
  constructor(private http: HttpClient) { }

  getUrlJson(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey}`;
    return url;
  }

  getTotalPages() {
    return this.http.get(this.getUrlJson('/discover/movie?')).pipe(
      map((data: any) => data.total_pages)
    );
  }

  getDiscoverMovies(page: number, sortBy: string) {
    return this.http.get(this.getUrlJson(`/discover/movie?`) + `&sort_by=${sortBy}&page=${page}`).pipe(
      map((data: any) => data.results)
    );
  }

  getMovieDetail(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}?`)).pipe(
      map((data: any) => data)
    );
  }

  getSimilarMovie(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}/similar?`)).pipe(
      map((data: any) => data.results)
    );
  }

  getReviews(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}/reviews?`)).pipe(
      map((data: any) => data.results)
    );
  }

  getGenres() {
    return this.http.get(this.getUrlJson(`/genre/movie/list?`)).pipe(
      map((data: any) => data.genres));
  }

  getUpcoming() {
    return this.http.get(this.getUrlJson(`/movie/upcoming?`)).pipe(
      map((data: any) => data.results));
  }
}
