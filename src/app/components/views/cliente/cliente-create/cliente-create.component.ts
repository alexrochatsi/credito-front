import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Endereco } from '../endereco.model';

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
    email: '',
    senha: '',
    endereco: this.endereco
  };

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      console.log(resposta);
    })
  }

}
