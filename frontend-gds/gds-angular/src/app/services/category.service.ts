import { Category } from './../models/category';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import IResponse from '../utils/IResponse';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_ENDPOINT = environment.restApiServer + `/category`;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<IResponse<Category[]>> {
    const url = this.BASE_ENDPOINT;

    return this.http.get<IResponse<Category[]>>(url);
  }

  insert(category: Category): Observable<IResponse<Category>> {
    const url = this.BASE_ENDPOINT;

    return this.http.post<IResponse<Category>>(url, category);
  }

  delete(id: any): Observable<IResponse<Category>> {
    const url = this.BASE_ENDPOINT +`/${id}`;

    return this.http.delete<IResponse<Category>>(url);
  }





}
