import { Cliente } from "../cliente/cliente.model";

export interface Emprestimo {
    id?: String;
    valor: number;
    dataPrimeiraParcela: Date;
    quantidadeParcelas: String;
    email: String;
    cliente: Cliente;
}