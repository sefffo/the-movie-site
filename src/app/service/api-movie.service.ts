
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {


  private readonly httpClient=inject(HttpClient);
  constructor() { }

  getMovies() : Observable<any>
  {
    return this.httpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940");
  }


}
