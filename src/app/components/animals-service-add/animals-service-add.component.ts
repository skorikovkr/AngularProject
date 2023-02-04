import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AnimalService } from 'src/app/models/animal-service';
import { AnimalServicesService } from 'src/app/services/ServicesService/animal-services.service';

@Component({
  selector: 'app-animals-service-add',
  templateUrl: './animals-service-add.component.html',
  styleUrls: ['./animals-service-add.component.css']
})
export class AnimalsServiceAddComponent implements OnInit {

  addAnimalServiceRequest: AnimalService = {
    id: 0,
    name: '',
    categoryId: 0,
    categoryName: ''
  };

  constructor(private animalServicesService: AnimalServicesService, private router: Router) {
    
  }

  ngOnInit(): void {
    
  }

  addAnimalService() {
    this.animalServicesService.addService(this.addAnimalServiceRequest)
    .subscribe({
      next: (service) => {
        this.router.navigate(['services']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
