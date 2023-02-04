import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuffListComponent } from './components/stuff-list/stuff-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AnimalServiceListComponent } from './components/animals-services-list/animal-service-list.component';
import { BranchOfficeComponent } from './components/branch-office/branch-office.component';
import { AnimalsServiceAddComponent } from './components/animals-service-add/animals-service-add.component';

const routes: Routes = [
  {
    path: 'services',
    component: AnimalServiceListComponent
  },
  {
    path: 'stuff',
    component: StuffListComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'branchoffice',
    component: BranchOfficeComponent
  },
  {
    path: 'addService',
    component: AnimalsServiceAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
