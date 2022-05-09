import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'af-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies!:[];

  constructor(private ms: MovieService) { }

  async ngOnInit(): Promise<void> {
    (await this.ms.getAllMovies()).subscribe(
      (res) => {
        this.movies = res;
      }
    )
  }

}
