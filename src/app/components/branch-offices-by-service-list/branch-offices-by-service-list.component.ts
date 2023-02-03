import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AnimalService } from 'src/app/models/animal-service';

@Component({
  selector: 'app-branch-offices-by-service-list',
  templateUrl: './branch-offices-by-service-list.component.html',
  styleUrls: ['./branch-offices-by-service-list.component.css']
})
export class BranchOfficesByServiceListComponent {

  constructor(public dialogRef: MatDialogRef<BranchOfficesByServiceListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {service: AnimalService}) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
