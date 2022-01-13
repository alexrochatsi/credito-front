import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Endereco } from '../endereco.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

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

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['clientes'])
  }

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      this.router.navigate(['/clientes']);
      this.service.mensagem('Cliente criado com sucesso!');
    }, err => {
      for (let i =0; i < err.error.errors.lenght; i ++) {
        this.service.mensagem(err.error.errors[i].message);
      }
    })
  }

}
