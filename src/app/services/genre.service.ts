import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apikey = 'b78a2c1e6b214a5b6bcf015adb9d40c3';
  private urlgenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b78a2c1e6b214a5b6bcf015adb9d40c3';

  constructor(private http: HttpClient) { }

  getUrlJson(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=id&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getDiscoverMovies() {
    return this.getUrlJson('/discover/movie?').pipe(
      map((data: any) => data.results)
    );
  }

  getGenres(): Observable<any> {
    return this.http.get(this.urlgenres);
  }
}
