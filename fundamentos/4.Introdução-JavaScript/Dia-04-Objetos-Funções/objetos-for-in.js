// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
//info.recorrente = 'Sim';
// info['recorrente'] = 'Sim';
// console.log(info);

// Defina o for/in que deve percorrer cada propriedade do objeto info.
// A cada loop, o for/in deve imprimir uma propriedade do objeto info com a função console.log.
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
// };

// for (let properties in info) {
//     //console.log(properties); //chave
//     console.log(info[properties]); //valor
// }

//Defina o objeto info2 com a mesma estrutura do objeto info porém com os valores pedidos no enunciado.
//  Defina o for/in que deve percorrer cada propriedade do objeto info.
// Utilize if/else para fazer uma condicional que deve testar, quando properties for recorrente, se os valores dos objetos são Sim. Caso sejam, imprima no terminal “Ambos recorrentes”. Caso a condicional seja falsa, imprima no terminal as informações dos objetos agrupadas por um e.
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };
// for (let properties in info) {
//     if (
//         properties === 'recorrente' &&
//         info[properties] === 'Sim' &&
//         info2[properties] === 'Sim'
//     ) {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(info[properties] + ' e ' + info2[properties]);
//     }
// }

// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo +'"');

// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array.Atribua a essa chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
    },
);
//console.log(leitor.livrosFavoritos);
//console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');