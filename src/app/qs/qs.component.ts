import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CategoryService} from '../home/category.service';
import { Category } from '../home/category.model';
@Component({
  selector: 'app-qs',
  templateUrl: './qs.component.html',
  styleUrls: ['./qs.component.css']
})
export class QsComponent implements OnInit {
  
  static URL='quienes-somos/:id';
  public category:Category;
  public categoryCreate:Category;
  
  constructor(private route: ActivatedRoute,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.category={id:'',category:''};
    this.categoryCreate={id:"",category:''};
    this.route.url.subscribe(data=>{
      console.log(data[1].path);
      this.syncrhonize(data[1].path);
    })
    console.log(this.route.snapshot.url[1].path);
  }

  syncrhonize(id:string){
    this.categoryService.getCategory(id).subscribe(
      data=>{
        this.category=data
        console.log(data);
      }
    )
  }
  create(){
    this.categoryService.postCategory(this.categoryCreate).subscribe(
      data=>{
        alert("categoria generada");
      }
    )
  }

}
