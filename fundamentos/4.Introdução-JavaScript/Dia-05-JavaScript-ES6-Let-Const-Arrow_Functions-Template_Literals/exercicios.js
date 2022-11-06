// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
// const pessoa = {
//     nome: 'Henri',
//     idade: 20
// }
// pessoa = {
//     nome: 'Luna',
//     idade: 19
// } // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);
//=========================================================
//Transforme a função hello em uma arrow function;
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));
//=========================================================
// Altere a expressão if/else utilizando ternary operator;
// let speed = 90;
// const speedCar = (speed) => {
//     if (speed >= 120) {
//         return `Você ultrapassou o limite de velocidade`;
//     } else {
//         return `Você está na velocidade permitida`;
//     }
// };
// console.log(speedCar(speed));
//=========================================================
// Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//         console.log('Idade dentro do for:', idade)
//     }
// }

// imprimeIdade()
//=========================================================
//Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// const pessoa = {
//     nome: 'Henri',
//     idade: 20
// }

// pessoa.nome = 'Luna'
// pessoa.idade = 19

// console.log('Nome:', pessoa.nome)
// console.log('Idade:', pessoa.idade)
//==========================================================
// Modifique a variável para que não ocorra Erro;
//Altere a variável do tipo const para o tipo let.
// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);
//==========================================================
//Transforme a função hello em uma arrow function;
// const hello = nome => `Olá, ${nome}!`

// let nome = 'Ivan';
// console.log(hello(nome));
//==========================================================
//Transforme a função nomeCompleto em uma arrow function;
// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

// let nome = 'Ivan';
// let sobrenome = 'Pires';

// console.log(nomeCompleto(nome, sobrenome));
//==========================================================
// Altere a expressão if/else utilizando ternary operator;
// let speed = 90;

// const speedCar = (speed) => (
//     speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
// );

// console.log(speedCar(speed));
//===========================================================

// Crie uma variável para armazenar o valor de status do seu motor(lembre - se de armazenar o tipo de variável da forma correta);
// Crie a função ligarDesligar utilizando arrow functions.Ela não receberá nenhum parâmetro;
// Crie a lógica para ligar e desligar o motor(a lógica deverá utilizar uma condicional para ligar e desligar o motor);
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre - se de utitizar o template literals nesse momento).
// Bônus(opcional): tente fazer o mesmo exercício utilizando ternary operator.

// let status = 'desligado';

// const ligarDesligar = () => (
//     status === 'desligado' ? status = 'ligado' : status = 'desligado'
// )

// console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
// console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
// console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
//==================================================================

// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
// Com base nessa informação:
// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
// Crie uma variável para armazenar o valor de PI(lembre - se de armazenar o tipo de variável da forma correta);
// Crie a lógica para retornar a área do círculo;
// Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre - se de utilizar o template literals nesse momento).
// const circleArea = (radius) => {
//     const PI = 3.14;

//     let area = PI * radius * radius;

//     return console.log(`Essa é a área do círculo: ${area}`);
// }

// circleArea(3); // Essa é a área do círculo: 28.259999999999998
// circleArea(5); // Essa é a área do círculo: 78.5
//====================================================================

// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
// Bônus(opcional): Tente fazer o mesmo exercício utilizando o método array.sort().
// const longestWord = (text) => {
//     const wordArray = text.split(' ');
//     let maxLength = 0;
//     let result = '';

//     for (const word of wordArray) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             result = word;
//         }
//     }

//     return result;
// }

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
//aconteceu;
//=====================================================================

//Longestword com sort em uma linha:
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));//aconteceu
//=========================================================================
//FUNCAO 1:
// Crie a função que irá receber um nome por parâmetro e crie a constante frase dentro dela.
// Transforme a string armazenada na constante frase em um array.
// Crie uma estrutura de repetição para percorrer a variável fraseArray.
// Crie uma estrutura condicional.
// Transforme a variável fraseArray em uma string e a retorne.
// const substituaX = (nome) => {
//     const frase = 'Tryber x aqui!';
//     const fraseArray = frase.split(' ');
//     for (let index = 0; index < fraseArray.length; index += 1) {
//         if (fraseArray[index] === 'x') {
//             fraseArray[index] = nome;
//         }
//     }
//     return fraseArray.join(' ');
// };

// console.log(substituaX('Lucas'));
//========================================================================

// Função 2: 
// Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const ;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX(utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// const minhasSkills = (func) => {
//     const skills = ['JavaScript', 'HTML', 'CSS'];
//     let resultado = `
//   ${func}

//   Minhas três principais habilidades são:`;
//     for (let index = 0; index < skills.length; index += 1) {
//         resultado = `${resultado}
//     - ${skills[index]}`; // reatribui e adiciona a skill atual à variável resultado
//     }
//     return resultado;
// };
// console.log(minhasSkills(substituaX('Lucas')));