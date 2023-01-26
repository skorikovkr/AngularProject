import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalService } from '../models/animal-service';
import { ServiceCategory } from '../models/animal-service-category';

@Injectable({
  providedIn: 'root'
})

export class AnimalServiceCategoryService {

  baseApiUrl: string = 'https://skorikovkr.ru';

  constructor(private http: HttpClient) { }

  getAllCategories() : Observable<ServiceCategory[]> {
    return this.http.get<ServiceCategory[]>(this.baseApiUrl + '/Service/GetServiceCategories');
  }
}
