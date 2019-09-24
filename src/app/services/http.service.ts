import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
// url = "http://localhost:8080";
url = "https://projeto-prog-web-backend.herokuapp.com";
  constructor(private http: HttpClient) {

   }

  public getAll() : Observable<any>{
    return this.http.get(this.url+"/clientes/getall");
  }

  
  public getAllProd() : Observable<any>{
    return this.http.get(this.url+"/produtos/getall");
  }

  public getAllVend() : Observable<any>{
    return this.http.get(this.url+"/vendas/getall");
  }
}
