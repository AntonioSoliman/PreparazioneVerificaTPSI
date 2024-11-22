import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  results: any[] = [];

  constructor(private foodService: FoodService) {}

  search(): void {
    this.foodService.searchFood(this.searchTerm).subscribe((response: any) => {
      this.results = response.products || [];
    });
  }
}
