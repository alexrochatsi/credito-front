import { Endereco } from "./endereco.model";

export interface Cliente {
    id?: String;
    name: String;
    cpf: String;
    rg: String;
    email: String;
    senha: String;
    endereco: Endereco;
}