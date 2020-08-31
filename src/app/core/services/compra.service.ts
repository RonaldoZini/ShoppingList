import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.url + 'compra';
  }

  post(compra : Compra){
    return this.http.post(this.endpoint, compra);
  }
}
