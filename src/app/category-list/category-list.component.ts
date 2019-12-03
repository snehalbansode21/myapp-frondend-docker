import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit 
{
  categories = []
  constructor(private service:CategoryService) { }

  ngOnInit() {
    this.service
      .getCategory()
        .subscribe(response =>{
          if(response['status']==='success')
          {
            this.categories = response['data'] as any[]
          }
          else
          {
            console.log('error',response['error'])
          }
        })
  }

}
