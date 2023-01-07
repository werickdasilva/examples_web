const tipoString = 'Uma String';

const tipoDefinido : number = 100;

// tipagem em objetos

interface UserObjectTipos {
    nome: string,
    idade: number,
    casado: boolean,
}

const user: UserObjectTipos = {
    nome: 'Werick',
    idade: 22,
    casado: false
}


// tipo de composição 
type MeuTipo = string | number
let tipo_de_composicao: MeuTipo = 'Vai ser do tipo string';

// outro jeito de usar o type
type ValoresQuePoderaoSerUsado = 'Um' | 'Dois' | 'Três'
let valorUsado: ValoresQuePoderaoSerUsado  = "Três";

// tipagem em função 
function tipagemEmFuncao(textos: string | string[] ) {
    // diz que o parametro que vai ter uma string ou um vetor de string
}

// misturando interface e funcão 
interface Tamanho {
    largura: number,
    altura: number,
}

function somaDosPontos(tamanho: Tamanho) {
    const soma = tamanho.largura * tamanho.altura
    console.log(`A Some entre ${tamanho.largura}X${tamanho.altura} é ${soma}`)
}

const tamanho = { largura: 20, altura: 35}
somaDosPontos(tamanho)
