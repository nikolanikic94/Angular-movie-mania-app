import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie.model';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.css'],
})
export class MoviesListItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}
