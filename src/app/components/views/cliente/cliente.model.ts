import { Endereco } from "./endereco.model";

export interface Cliente {
    id?: String;
    name: String;
    renda: number;
    cpf: String;
    rg: String;
    email: String;
    senha: String;
    endereco: Endereco;
}