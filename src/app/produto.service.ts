import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'https://faculdade-api-compras.azurewebsites.net/api/produto';
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.endpoint);
  }

  getProduto(id: number): Observable<Produto> {
    const url = '${this.endpoint}/${id}';
    return this.http.get<Produto>(url).pipe();
  }
}

