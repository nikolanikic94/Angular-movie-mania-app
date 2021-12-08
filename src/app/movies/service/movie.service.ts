import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieSearch } from 'src/app/model/MovieSearch.model';
import { Movie } from 'src/app/model/Movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/api/movies';
  constructor(private http: HttpClient) {}

  getAllMovies(params): Observable<MovieSearch> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', (params.page && JSON.stringify(params.page)) || '')
          .set(
            'pageSize',
            (params.pageSize && JSON.stringify(params.pageSize)) || ''
          )
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection),
      };
    }

    return this.http
      .get(this.url, queryParams)
      .pipe(map((response) => new MovieSearch(response)));
  }

  getOneMovie(id: number): Observable<Movie> {
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(map((response) => new Movie(response)));
  }

  addMovie(movie: Movie) {
    return this.http
      .post(this.url, movie)
      .pipe(map((response) => new Movie(response)));
  }

  updateMovie(movie: Movie) {
    return this.http
      .put(`${this.url}/${movie.id}`, movie)
      .pipe(map((response) => new Movie(response)));
  }
}
