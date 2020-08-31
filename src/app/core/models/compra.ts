import { CompraItens } from "./compra-itens";

export class Compra {
    compraId: number;
    dataHora: string;
    atendente: string;
    tipoPagamento: string;
    compraItens: CompraItens[] = [];
}
