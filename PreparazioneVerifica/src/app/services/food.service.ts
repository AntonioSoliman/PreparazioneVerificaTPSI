import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = 'https://world.openfoodfacts.org/cgi/search.pl';

  constructor(private http: HttpClient) {}

  searchFood(term: string, pageSize: number = 10): Observable<any> {
    const url = `${this.baseUrl}?search_terms=${term}&page_size=${pageSize}&json=true`;
    return this.http.get(url);
  }

  getFoodDetails(id: string): Observable<any> {
    return this.http.get(`https://world.openfoodfacts.org/api/v0/product/${id}`);
  }
}
