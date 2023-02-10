import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from 'src/app/models/animal-service';
import { ServiceCategory } from 'src/app/models/animal-service-category';
import { ServiceInBranchOffice } from 'src/app/models/service-in-branch-office';
import { BranchOfficeService } from 'src/app/services/BranchOfficeService/branch-office.service';
import { AnimalServiceCategoryService } from 'src/app/services/ServiceCategoryService/animal-service-category.service';
import { AnimalServicesService } from 'src/app/services/ServicesService/animal-services.service';
import { BranchOfficesByServiceListComponent } from '../branch-offices-by-service-list/branch-offices-by-service-list.component';

@Component({
  selector: 'app-services-list-dialog',
  templateUrl: './services-list-dialog.component.html',
  styleUrls: ['./services-list-dialog.component.css']
})
export class ServicesListDialogComponent implements OnInit {
  
  services: AnimalService[] = [];
  defaultServiceCategory: ServiceCategory = {
    id: -1,
    name: 'Все категории'
  };
  selectedCategory: ServiceCategory;
  serviceCategories: ServiceCategory[] = [];
  serviceCategoriesDict: Map<number, ServiceCategory> 
    = new Map<number, ServiceCategory>;
  searchWord: string = '';

  constructor(private animalServicesService: AnimalServicesService,
    public dialogRef: MatDialogRef<ServicesListDialogComponent>,
    private serviceCategoriesService: AnimalServiceCategoryService,
    @Inject(MAT_DIALOG_DATA) public data: {}) {
    this.selectedCategory = this.defaultServiceCategory;
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSearchClick(): void {
        if (this.selectedCategory.id == -1)
    {
      this.animalServicesService.getAllServices()
      .subscribe(
        {
          next: (services) => {
            this.HandleResult(services)
          },
          error: (response) => {
            console.log(response);
            return;
          }
        }
      );
    } else {
      this.animalServicesService.getServicesByCategory(this.selectedCategory)
      .subscribe(
        {
          next: (services) => {
            this.HandleResult(services);
          },
          error: (response) => {
            console.log(response);
            return;
          }
        }
      );
    }
  }

  private HandleResult(services: AnimalService[]) : void {
    let result = services;
    this.services = [];
    result.forEach(element => {
      if (this.searchWord.trim() === '' || 
        element.name.toLowerCase().includes(this.searchWord.toLowerCase()))
        this.services.push(element);
    });
  }

  ngOnInit(): void {
    this.serviceCategoriesService.getAllCategories()
    .subscribe(
      {
        next: (categories) => {
          this.serviceCategories = categories;
          categories.forEach(cat => {
            this.serviceCategoriesDict.set(cat.id, cat);
          });
        },
        error: (response) => {
          console.log(response);
        }
      }
    );
    this.animalServicesService.getAllServices()
    .subscribe(
      {
        next: (objects) => {
          this.services = objects;
        },
        error: (response) => {
          console.log(response);
          this.dialogRef.close();
        }
      }
    )
  };
}
