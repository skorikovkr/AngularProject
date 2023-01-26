import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnimalService } from '../models/animal-service';
import { ServiceCategory } from '../models/animal-service-category';

@Injectable({
  providedIn: 'root'
})
export class AnimalServicesService {

  baseApiUrl: string = 'https://skorikovkr.ru';

  constructor(private http: HttpClient) { }

  getAllServices() : Observable<AnimalService[]> {
    return this.http.get<AnimalService[]>(this.baseApiUrl + '/Service/GetAllServices');
  }

  getServicesByCategory(category: ServiceCategory) : Observable<AnimalService[]> {
    let queryParams = new HttpParams().append("categoryId", category.id);
    return this.http.get<AnimalService[]>(this.baseApiUrl + '/Service/GetServiceByCategoryId', {params: queryParams});
  }

  addService(service: AnimalService) : Observable<AnimalService> {
    return this.http.post<AnimalService>(this.baseApiUrl + '/Service/AddService', service);
  }
}
