import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalServiceListComponent } from './components/animals-services-list/animal-service-list.component';
import { AnimalsServiceAddComponent } from './components/animals-service-add/animals-service-add.component';
import { StuffListComponent } from './components/stuff-list/stuff-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BranchOfficesByServiceListComponent } from './components/branch-offices-by-service-list/branch-offices-by-service-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BranchOfficeComponent } from './components/branch-office/branch-office.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalServiceListComponent,
    AnimalsServiceAddComponent,
    StuffListComponent,
    HomeComponent,
    LoginComponent,
    BranchOfficesByServiceListComponent,
    BranchOfficeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
