import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnimalService } from '../models/animal-service';

@Injectable({
  providedIn: 'root'
})
export class AnimalServicesService {

  baseApiUrl: string = 'https://DESKTOP-740JP2S:7022';

  constructor(private http: HttpClient) { }

  getAllServices() : Observable<AnimalService[]> {
    return this.http.get<AnimalService[]>(this.baseApiUrl + '/Service/GetAllServices');
  }
}
