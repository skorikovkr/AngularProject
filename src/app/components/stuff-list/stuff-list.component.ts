import { Component, OnInit } from '@angular/core';
import { Stuff } from 'src/app/models/stuff';
import { StuffCategory } from 'src/app/models/stuff-category';
import { StuffCategoryService } from 'src/app/services/StuffCategoryService/stuff-category.service';
import { StuffService } from 'src/app/services/StuffService/stuff.service';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit{
  stuff: Stuff[] = [];
  defaultStuffCategory: StuffCategory = {
    id: -1,
    name: 'Все категории'
  };
  selectedCategory: StuffCategory;
  stuffCategories: StuffCategory[] = [];
  searchWord: string = '';

  constructor(private stuffService: StuffService,
    private stuffCategoriesService: StuffCategoryService) {
    this.selectedCategory = this.defaultStuffCategory;
  }

  ngOnInit(): void {
    this.stuffCategoriesService.getAllCategories()
    .subscribe(
      {
        next: (stuff) => {
          this.stuffCategories = stuff;
        },
        error: (response) => {
          console.log(response);
        }
      }
    )
  };

  onClick(): void {
    if (this.selectedCategory.id == -1)
    {
      this.stuffService.getAllServices()
      .subscribe(
        {
          next: (stuff) => {
            this.HandleResult(stuff)
          },
          error: (response) => {
            console.log(response);
            return;
          }
        }
      );
    } else {
      this.stuffService.getStuffByCategory(this.selectedCategory)
      .subscribe(
        {
          next: (stuff) => {
            this.HandleResult(stuff);
          },
          error: (response) => {
            console.log(response);
            return;
          }
        }
      );
    }
  }

  private HandleResult(stuff: Stuff[]) : void {
    let result = stuff;
    this.stuff = [];
    result.forEach(element => {
      if (this.searchWord.trim() === '' || 
        element.name.toLowerCase().includes(this.searchWord.toLowerCase()))
        this.stuff.push(element);
    });
  }

}
