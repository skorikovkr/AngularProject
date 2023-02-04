import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchOffice } from 'src/app/models/branch-office';
import { ServiceInBranchOffice } from 'src/app/models/service-in-branch-office';
import { BranchOfficeService } from 'src/app/services/BranchOfficeService/branch-office.service';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {
  office?: BranchOffice;
  services: ServiceInBranchOffice[] = [];
  
  constructor(private officeService: BranchOfficeService,
    private route: ActivatedRoute) {
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

}
