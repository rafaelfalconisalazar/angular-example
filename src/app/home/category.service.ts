import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService{
    private url="https://api-products-rafael.herokuapp.com/api/v0/categories";
    constructor(private http: HttpClient) {
    }
    getCategories(): Observable < Category[] > {
        return this.http.get<Category[]>(this.url);
    }
    getCategory(id:String):Observable<Category>{
        return this.http.get<Category>(this.url+'\\'+id); 
    }

    postCategory(category:Category):Observable<any>{
        return this.http.post(this.url,category);
    }

}