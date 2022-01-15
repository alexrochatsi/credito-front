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

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', ({
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    }))
  }

}
