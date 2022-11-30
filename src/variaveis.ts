/** tipos primitivos */
let ligado: boolean = false;
let nome: string = "Felipe";
let idade: number = 30;
let altura: number = 1.9;

/** tipos especiais */
let nulo: null = null;
let indefinido: undefined = undefined;

/** tipo void e any */
let retornoView: any = 1;

/** objeto - sem previsibilidade, não é uma boa pratica */
let produto: object = {
  name: "Felipe",
  cidade: "pa",
  idade: 27,
};


/** Objeto tipado - com previsibilidade */
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
}

/** Arrays */
let dados: string[] = ["felipe", "Rafael"];
let dados2: Array<string> = ["felipe", "Rafael"];

/** Array que armazena mais de um tipo */
let infos: (string | number | boolean)[] = ["Felipe", 30, "Felipe", false];

/** Tuplas */
let boleto: [string, number, number] = ["agua conta", 199.90, 332414144];

/** Arrays Metodos são os mesmo do Javascript*/

/** Datas */
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());