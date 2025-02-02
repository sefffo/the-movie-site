import { Component, inject, Inject } from '@angular/core';
import { ApiMovieService } from '../service/api-movie.service';
import { Movies } from '../Models/movies';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  imgPath:string="https://image.tmdb.org/t/p/w500";
  private apiMovieService=inject(ApiMovieService);

  homeMovies:Movies[]=[];
  ngOnInit(): void {

    this.apiMovieService.getMovies().subscribe(
      {
        next:(res)=>{
          console.log(res.results)
          this.homeMovies=res.results;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
