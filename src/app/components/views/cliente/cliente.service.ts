import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Cliente[]> {
    const url = `${this.baseUrl}/clientes`
    return this.http.get<Cliente[]>(url)
  }

  findById(id: String): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/${id}`;
    console.log(this.http.get<Cliente>(url))
    return this.http.get<Cliente>(url);
  }

  create(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes`
    return this.http.post<Cliente>(url, cliente);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/clientes/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', ({
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    }))
  }
}
