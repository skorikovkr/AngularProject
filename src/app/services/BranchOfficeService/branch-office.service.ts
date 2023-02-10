import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/AppSettings';
import { BranchOffice } from 'src/app/models/branch-office';
import { ServiceInBranchOffice } from 'src/app/models/service-in-branch-office';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  baseApiUrl: string = AppSettings.API_ENDPOINT;
  constructor(private http: HttpClient) { }

  getOfficesByServiceId(serviceId: number) : Observable<ServiceInBranchOffice[]> {
    return this.http.get<ServiceInBranchOffice[]>(this.baseApiUrl + `/Service/GetBranchOfficesAndPricesByService?Id=${serviceId}`);
  }

  getBranchOfficeById(officeId: number) : Observable<BranchOffice> {
    var result =  this.http.get<BranchOffice>(this.baseApiUrl + `/BranchOffices/GetBranchOfficeId?officeId=${officeId}`);
    return result;
  }

  getServicesInBranchOfficeById(officeId: number) : Observable<ServiceInBranchOffice[]> {
    var result =  this.http.get<ServiceInBranchOffice[]>(this.baseApiUrl + `/Service/GetServiceByBranchOffice?id=${officeId}`);
    return result;
  }

  deleteServiceInBranchOfficeById(officeId: number, serviceId: number) : Observable<any> {
    var result =  this.http.post(
      this.baseApiUrl + `/BranchOffices/DeleteServiceInBranchOfficeById?branchOfficeId=${officeId}&serviceId=${serviceId}`, {});
    return result;
  }

  editServiceInBranchOfficeById(officeId: number, serviceId: number, price: number) : Observable<any> {
    var result =  this.http.post(
      this.baseApiUrl + `/BranchOffices/EditServiceInBranchOfficeById?branchOfficeId=${officeId}&serviceId=${serviceId}&price=${price}`, {});
    return result;
  }
}
