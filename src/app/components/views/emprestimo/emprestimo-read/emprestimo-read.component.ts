import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { Endereco } from '../../cliente/endereco.model';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'app-emprestimo-read',
  templateUrl: './emprestimo-read.component.html',
  styleUrls: ['./emprestimo-read.component.css']
})
export class EmprestimoReadComponent implements OnInit {

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

  constructor(private service: EmprestimoService, private router: Router) { }

  ngOnInit(): void {
  }

}
