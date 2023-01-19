import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/models/animal-service';
import { Employee } from 'src/app/models/employee.model';
import { AnimalServicesService } from 'src/app/services/animal-services.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  services: AnimalService[] = [];

  constructor(private animalServicesService: AnimalServicesService) {
  }

  ngOnInit(): void {
    this.animalServicesService.getAllServices()
    .subscribe(
      {
        next: (services) => {
          this.services = services;
        },
        error: (response) => {
          console.log(response);
        }
      }
    );
  }
}
