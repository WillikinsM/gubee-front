import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtos } from './produtos/produtos.models';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Produtos[]>{
    const url = `${this.baseUrl}/produtos`
    return this.http.get<Produtos[]>(url)
  }
}
