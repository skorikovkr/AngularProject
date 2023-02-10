import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BranchOffice } from 'src/app/models/branch-office';
import { ServiceInBranchOffice } from 'src/app/models/service-in-branch-office';
import { BranchOfficeService } from 'src/app/services/BranchOfficeService/branch-office.service';
import { ServicesListDialogComponent } from '../services-list-dialog/services-list-dialog.component';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {
  office?: BranchOffice;
  services: ServiceInBranchOffice[] = [];
  
  constructor(private officeService: BranchOfficeService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(DOCUMENT) document: Document) {
  }

  ngOnInit() : void {
      this.route.queryParams.subscribe(params => {
        this.officeService.getBranchOfficeById(params['id'])
        .subscribe(
        {
          next: (o) => {
            this.office = o;
          },
          error: (response) => {
            console.log(response);
          }
        })
    });
    this.route.queryParams.subscribe(params => {
      this.officeService.getServicesInBranchOfficeById(params['id'])
      .subscribe(
      {
        next: (o) => {
          this.services = o;
        },
        error: (response) => {
          console.log(response);
        }
      })
  });
  }

  deleteService(service: ServiceInBranchOffice) {
    this.officeService
    .deleteServiceInBranchOfficeById(service.branchOfficeId, service.serviceId)
    .subscribe(
      {
        next: (o) => {
          this.ngOnInit();
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  editService(service: ServiceInBranchOffice) {
    let price = (<HTMLInputElement>document.getElementById(`priceInput${service.serviceId}`)).valueAsNumber;
    this.officeService
    .editServiceInBranchOfficeById(service.branchOfficeId, service.serviceId, price)
    .subscribe(
      {
        next: (o) => {
          this.ngOnInit();
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  openServicesListDialog() {
    this.dialog.open(ServicesListDialogComponent, {
      data: {},
    });
  }
}
