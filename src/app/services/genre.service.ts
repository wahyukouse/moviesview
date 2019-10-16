import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


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

  getCast(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}/credits?`)).pipe(
      map((data: any) => data.cast)
    );
  }

  getTotalPages() {
    return this.http.get(this.getUrlJson('/discover/movie?')).pipe(
      map((data: any) => data.total_pages)
    );
  }

  getDiscoverMovies(page: number, sortBy: string) {
    return this.http.get(this.getUrlJson(`/discover/movie?`) + `&sort_by=${sortBy}&page=${page}`).pipe(
      map((data: any) => data)
    );
  }

  getMovieDetail(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}?`)).pipe(
      map((data: any) => data)
    );
  }

  getRecommendations(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}/recommendations?`)).pipe(
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

  getUpcoming(page: number) {
    return this.http.get(this.getUrlJson(`/movie/upcoming?`) + `&page=${page}`).pipe(
      map((data: any) => data));
  }

  getNowPlaying(page: number) {
    return this.http.get(this.getUrlJson(`/movie/now_playing?`) + `&page=${page}`).pipe(
      map((data: any) => data));
  }

  getTopRate(page: number) {
    return this.http.get(this.getUrlJson(`/movie/top_rated?`) + `&page=${page}`).pipe(
      map((data: any) => data));
  }

  getVideos(id: number) {
    return this.http.get(this.getUrlJson(`/movie/${id}/videos?`)).pipe(
      map((data: any) => data.results));
  }
}
