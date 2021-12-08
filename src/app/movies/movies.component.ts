import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie.model';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  count: number;
  movies: Movie[];

  parameters = {
    page: 1,
    pageSize: 6,
    sort: '',
    sortDirection: '',
  };

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.refreshMovies();
  }

  refreshMovies() {
    this.service.getAllMovies(this.parameters).subscribe((response) => {
      this.count = response.$count;
      this.movies = response.$results;
    });
  }

  updatePagination(value) {
    this.parameters.page = value.page;

    this.refreshMovies();
  }

  updateSortCriteria(value) {
    this.parameters.sort = value.sort;
    this.parameters.sortDirection = value.sortDirection;

    this.refreshMovies();
  }
}
