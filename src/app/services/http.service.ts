import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

   }

  public getAll() : Observable<any>{
    return this.http.get("https://projeto-prog-web-backend.herokuapp.com/clientes/getall");
  }

  
  public getAllProd() : Observable<any>{
    return this.http.get("https://projeto-prog-web-backend.herokuapp.com/produtos/getall");
  }

  public getAllVend() : Observable<any>{
    return this.http.get("https://projeto-prog-web-backend.herokuapp.com/vendas/getall");
  }
}
