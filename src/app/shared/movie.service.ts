import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  async getAllMovies(): Promise<Observable<Object[]>>{
    return await this.http.get(`${URL}movie`);
  }


}
