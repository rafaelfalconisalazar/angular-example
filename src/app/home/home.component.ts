import { Component, OnInit, Injectable } from '@angular/core';
import { Category } from './category.model';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.syncrhonize();
  }

  syncrhonize(){
    this.categoryService.getCategories().subscribe(
      data=>{
        console.log(data);
        this.categories=data
      }
    )
  }
  

}
