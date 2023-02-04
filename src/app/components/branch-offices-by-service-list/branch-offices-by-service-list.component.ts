import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AnimalService } from 'src/app/models/animal-service';
import { BranchOffice } from 'src/app/models/branch-office';
import { ServiceInBranchOffice } from 'src/app/models/service-in-branch-office';
import { BranchOfficeService } from 'src/app/services/BranchOfficeService/branch-office.service';

@Component({
  selector: 'app-branch-offices-by-service-list',
  templateUrl: './branch-offices-by-service-list.component.html',
  styleUrls: ['./branch-offices-by-service-list.component.css']
})
export class BranchOfficesByServiceListComponent implements OnInit {

  offices: ServiceInBranchOffice[] = [];

  constructor(private branchOfficeService: BranchOfficeService,
    public dialogRef: MatDialogRef<BranchOfficesByServiceListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {service: AnimalService}) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSearchClick(): void {
  }

  ngOnInit(): void {
    this.branchOfficeService.getOfficesByServiceId(this.data.service.id)
    .subscribe(
      {
        next: (objects) => {
          this.offices = objects;
        },
        error: (response) => {
          console.log(response);
          this.dialogRef.close();
        }
      }
    )
  };
}
