import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../../AppSettings';
import { Stuff } from '../../models/stuff';
import { StuffCategory } from '../../models/stuff-category';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  
  baseApiUrl: string = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getAllServices() : Observable<Stuff[]> {
    let result = [
      {id: 1, name: 'Шампунь для собаки', categoryId: 1, categoryName: ''}, 
      {id: 2, name: 'Куртка для кошки', categoryId: 2, categoryName: ''},
      {id: 3, name: 'Нахвостник шерстяной', categoryId: 2, categoryName: ''},
      {id: 4, name: 'Тапочки для котят', categoryId: 2, categoryName: ''}
    ];
    return new Observable((subscriber) => {
      subscriber.next(result);
    });
  }

  getStuffByCategory(category: StuffCategory) : Observable<Stuff[]> {
    let result : Stuff[] = [];
    this.getAllServices()
    .subscribe({
        next: (stuff) => {
          result = stuff.copyWithin(0, 0).filter(s => s.categoryId === category.id);
        },
        error: (response) => {
          console.log(response);
          return;
        }
      }
    );
    return new Observable((subscriber) => {
      subscriber.next(result);
    });
  }
}
