import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from 'src/app/models/animal-service';
import { ServiceCategory } from 'src/app/models/animal-service-category';
import { AnimalServiceCategoryService } from 'src/app/services/ServiceCategoryService/animal-service-category.service';
import { AnimalServicesService } from 'src/app/services/ServicesService/animal-services.service';
import { BranchOfficesByServiceListComponent } from '../branch-offices-by-service-list/branch-offices-by-service-list.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-animal-service-list',
  templateUrl: './animal-service-list.component.html',
  styleUrls: ['./animal-service-list.component.css']
})

export class AnimalServiceListComponent implements OnInit {
  
  services: AnimalService[] = [];
  defaultServiceCategory: ServiceCategory = {
    id: -1,
    name: 'Все категории'
  };
  selectedCategory: ServiceCategory;
  serviceCategories: ServiceCategory[] = [];
  searchWord: string = '';

  constructor(private animalServicesService: AnimalServicesService,
    private serviceCategoriesService: AnimalServiceCategoryService,
    public dialog: MatDialog) {
    this.selectedCategory = this.defaultServiceCategory;
  }

  ngOnInit(): void {
    this.serviceCategoriesService.getAllCategories()
    .subscribe(
      {
        next: (categories) => {
          this.serviceCategories = categories;
        },
        error: (response) => {
          console.log(response);
        }
      }
    )
  };

  openOfficesList(service: AnimalService): void {
    this.dialog.open(BranchOfficesByServiceListComponent, {
      data: {service: service},
    });
  }

  onClick(): void {
    if (this.selectedCategory.id == -1)
    {
      this.animalServicesService.getAllExistingServices()
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
      this.animalServicesService.getExistingServicesByCategory(this.selectedCategory)
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
}
