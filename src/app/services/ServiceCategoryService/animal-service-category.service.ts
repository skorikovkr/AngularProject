import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalService } from '../../models/animal-service';
import { ServiceCategory } from '../../models/animal-service-category';
import { AppSettings } from '../../AppSettings';

@Injectable({
  providedIn: 'root'
})

export class AnimalServiceCategoryService {

  baseApiUrl: string = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getAllCategories() : Observable<ServiceCategory[]> {
    return this.http.get<ServiceCategory[]>(this.baseApiUrl + '/Service/GetServiceCategories');
  }
}
