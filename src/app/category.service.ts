import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService 
{
  url = 'http://172.18.4.221:9898/category';

  constructor(private http:HttpClient) { }

  getCategory()
  {
    return this.http.get(this.url)
  }
}
