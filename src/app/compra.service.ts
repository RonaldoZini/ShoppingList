import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Compra } from './compra';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'https://faculdade-api-compras.azurewebsites.net/api/compra';
  }

  post(compra : Compra){
    return this.http.post(this.endpoint, compra);
  }
}
