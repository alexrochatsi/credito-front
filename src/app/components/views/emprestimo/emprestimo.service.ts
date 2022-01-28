import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emprestimo } from './emprestimo.model';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient, private _snack: MatSnackBar) { }

  create(emprestimo: Emprestimo): Observable<Emprestimo> {
    const url = `${this.baseUrl}/emprestimos/${emprestimo.cliente.id}`;
    return this.http.post<Emprestimo>(url, emprestimo);
  }

  findByIdCliente(emprestimo: Emprestimo): Observable<Emprestimo>{
    const url = `${this.baseUrl}/emprestimos?cliente=${emprestimo.cliente.id}`;
    return this.http.get<Emprestimo>(url);
  }

  findById(id: String): Observable<Emprestimo> {
    const url = `${this.baseUrl}/emprestimos/${id}`;
    console.log(this.http.get<Emprestimo>(url))
    return this.http.get<Emprestimo>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', ({
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    }))
  }

}
