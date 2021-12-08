import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  movie: Movie;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: MovieService,
    private route: ActivatedRoute
  ) {
    this.movieForm = this.fb.group({
      name: '',
      description: '',
      year: '',
      rating: '',
      duration: '',
      director: '',
      genre: '',
    });
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getOneMovie(id).subscribe((response) => {
        this.movie = response;
        this.movieForm.patchValue(response);
      });
    }
  }

  onSubmit() {
    let submittedMovie = new Movie(this.movieForm.value);

    if (this.movie && this.movie.id) {
      submittedMovie.id = this.movie.id;
      this.service.updateMovie(submittedMovie).subscribe((response) => {
        this.movieForm.reset();
        this.router.navigate(['/movies']);
      });
    } else {
      this.service.addMovie(submittedMovie).subscribe((response) => {
        this.movieForm.reset();
        this.router.navigate(['/movies']);
      });
    }
  }
}
