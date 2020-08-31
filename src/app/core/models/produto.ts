import { TipoProduto } from "./tipo-produto";

export class Produto {
    produtoId: number;
    tipoProduto: TipoProduto;
    descricao: string;
    imagem: string;
    preco: number;
}
