// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions(Lembre - se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result, que será o retorno final da função.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre - se de utilizar template literals nesse momento).
// Bônus: tente fazer o mesmo exercício de forma recursiva.Spoiler: É possível resolver com uma linha usando ternary operator.
// const factorial = (number) => {
//     let result = 1;
//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//     }
//     return result;
// };
// const print = factorial(4); //Lembre-se de alterar o valor de number!
// console.log(`Esse é o fatorial ${print}`);

//Recursiva:
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(4));

//==============================================================================
//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase:
//Crie uma função que receba uma string por parâmetro:
//Transforme a string recebida por parâmetro em um array através do método split:
//Crie uma variável que será responsável por armazenar o tamanho da maior palavra:
//Crie uma variável que será responsável por armazenar a palavra de maior tamanho:
//Crie uma estrutura de repetição utilizando o for of:
// Crie uma estrutura de condicional utilizando if/else.
// Caso o tamanho da palavra atual seja maior que o valor armazenado em maxLength:
// ##atribua o valor do tamanho da palavra atual para a variável maxLength;
// ##armazene a palavra atual na variável result:
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

//Longestword com sort em uma linha:
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));