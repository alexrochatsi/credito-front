import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Endereco } from '../endereco.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

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
    id: '',
    name: '',
    cpf: '',
    rg: '',
    renda: NaN,
    email: '',
    senha: '',
    endereco: this.endereco
  };

  constructor(private service: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')
  }

  findById(): void {
    this.service.findById(this.cliente.id).subscribe((resposta) => {
      
    })
  }

}
