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

  public cadastrarCliente(nome) : Observable<any>{
    return this.http.post(this.url+"/clientes/novo",{nome});
  }
  public atualizarCliente(id, nome) : Observable<any>{
    return this.http.put(this.url+"/clientes/update/"+id,{ nome});
  }
  public excluirCliente(id) : Observable<any>{
    return this.http.delete(this.url+"/clientes/delete/"+id,{ });
  }
  public cadastrarProduto(nome, preco) : Observable<any>{
    return this.http.post(this.url+"/produtos/novo",{nome, preco});
  }
  public atualizarProduto(id, nome, preco) : Observable<any>{
    return this.http.put(this.url+"/produtos/update/"+id,{ nome, preco});
  }
  public excluirProduto(id) : Observable<any>{
    return this.http.delete(this.url+"/produtos/delete/"+id,{ });
  }


  public cadastrarVenda(data, clienteId) : Observable<any>{
    return this.http.post(this.url+"/vendas/novo",{data, clientes:{id:clienteId}});
  }
  public atualizarVenda(id, data, clienteId) : Observable<any>{
    return this.http.put(this.url+"/vendas/update/"+id,{data, clientes:{id:clienteId}});
  }
  public excluirVenda(id) : Observable<any>{
    return this.http.delete(this.url+"/vendas/delete/"+id,{ });
  }
  
}
