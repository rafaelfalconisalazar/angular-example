import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService{

    constructor(private http: HttpClient) {
    }
    getCategories(): Observable < Category[] > {
        return this.http.get<Category[]>('https://api-products-rafael.herokuapp.com/api/v0/categories');
    }
    getCategory(id:String):Observable<Category>{
        return this.http.get<Category>('https://api-products-rafael.herokuapp.com/api/v0/categories'+'\\'+id); 
    }
}