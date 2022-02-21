import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResults(seachString: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`/api/recipes?search=${seachString}`);
  }
}
