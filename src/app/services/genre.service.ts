import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  private apikey = 'b78a2c1e6b214a5b6bcf015adb9d40c3';
  readonly apiUrl = `https://api.themoviedb.org/3`;
  readonly headerKey = {
    headers: {
      api_key: this.apikey
    }
  };

  constructor(private http: HttpClient) { }

  getUrlJson(query: string) {
    return `https://api.themoviedb.org/3${query}&api_key=${this.apikey}`;
  }

  getCast(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}/credits?`, this.headerKey);
  }

<<<<<<< HEAD
=======
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
>>>>>>> 3d9483de5cc4dc8f918da6e5c9a6124cb4b26296

  getDiscoverMovies(page: number, sortBy: string): Observable<any> {
    return this.http.get(this.getUrlJson(`/discover/movie?`) + `&sort_by=${sortBy}&page=${page}`);
  }

  getMovieDetail(id: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/${id}?`));
  }

  getRecommendations(id: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/${id}/recommendations?`));
  }

  getReviews(id: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/${id}/reviews?`));
  }

<<<<<<< HEAD
  getUpcoming(page: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/upcoming?`) + `&page=${page}`);
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/now_playing?`) + `&page=${page}`);
  }

  getTopRate(page: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/top_rated?`) + `&page=${page}`);
=======
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
>>>>>>> 3d9483de5cc4dc8f918da6e5c9a6124cb4b26296
  }

  getVideos(id: number): Observable<any> {
    return this.http.get(this.getUrlJson(`/movie/${id}/videos?`));
  }
}
