import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { Endereco } from '../../cliente/endereco.model';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'app-emprestimo-create',
  templateUrl: './emprestimo-create.component.html',
  styleUrls: ['./emprestimo-create.component.css']
})
export class EmprestimoCreateComponent implements OnInit {

  endereco: Endereco = {
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: ''
  }

  cliente: Cliente = {
    name: '',
    cpf: '',
    rg: '',
    renda: NaN,
    email: '',
    senha: '',
    endereco: this.endereco
  };

  emprestimo: Emprestimo = {
    id!: '',
    valor: NaN,
    dataPrimeiraParcela: new Date(),
    quantidadeParcelas: '',
    email: '',
    cliente: this.cliente,
  }

  constructor(private service:EmprestimoService, private router:Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.emprestimo).subscribe((resposta) => {
      this.router.navigate(['/emprestimos']);
      this.service.mensagem('Emprestimo criado com sucesso!');
    }, err => {
      for (let i =0; i < err.error.errors.lenght; i ++) {
        this.service.mensagem(err.error.errors[i]);
      }
    })
  }

}
