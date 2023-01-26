import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsServiceAddComponent } from './components/animals/animals-service-add/animals-service-add/animals-service-add.component';
import { AnimalServiceListComponent } from './components/animals/animals-services-list/animal-service-list/animal-service-list.component';
import { StuffListComponent } from './components/animals/stuff-list/stuff-list.component';

const routes: Routes = [
  {
    path: 'services',
    component: AnimalServiceListComponent
  },
  {
    path: 'stuff',
    component: StuffListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
