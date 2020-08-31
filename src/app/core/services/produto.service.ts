import { Produto } from './../models/produto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  endpoint: string;
  local: string;

  constructor(private http: HttpClient) {
    this.local = 'assets/static/produtos.json'
    this.endpoint = environment.production ? environment.url + 'compra' : this.local;
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.endpoint);
  }

  getProduto(id: number): Observable<Produto> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Produto>(url).pipe();
  }
}

