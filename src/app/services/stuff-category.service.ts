import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StuffCategory } from '../models/stuff-category';

@Injectable({
  providedIn: 'root'
})
export class StuffCategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories() : Observable<StuffCategory[]> {
    let result = [{id: 1, name: 'Товары для ухода'}, {id: 2, name: 'Одежда для животных'}];
    return new Observable((subscriber) => {
      subscriber.next(result);
    });
  }
}
