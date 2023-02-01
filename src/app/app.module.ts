import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalServiceListComponent } from './components/animals/animals-services-list/animal-service-list/animal-service-list.component';
import { AnimalsServiceAddComponent } from './components/animals/animals-service-add/animals-service-add/animals-service-add.component';
import { FormsModule } from '@angular/forms';
import { StuffListComponent } from './components/animals/stuff-list/stuff-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalServiceListComponent,
    AnimalsServiceAddComponent,
    StuffListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
