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
