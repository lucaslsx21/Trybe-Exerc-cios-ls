// Adicionar o array;
// Criar uma variável com valor 0;
// Criar um loop que percorre o array;
// Incrementar a variável com o valor correspondente a cada loop;
// Criar um if com a condição de a variável ser maior que 15;
// Caso a variável obedeça à condição:
// Imprimir a variável
// Caso não obedeça à condição:
// Imprimir a mensagem “valor menor que 16”.

//exercise.js
// let fruits = [3, 4, 10, 1, 12];
// let sum = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//     sum += fruits[index];
// }

// if (sum > 15) {
//     console.log(sum);
// } else {
//     console.log('valor menor que 16');//30
// }

//crie um algoritmo que imprima na tela o fatorial de 10.
// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fatorial *= index;
// }

// console.log(fatorial); //3628800

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//     reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);//rebyrt = traz a string de traz pra frente;

//Outra solução possível:
// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);//rebyrt

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > biggestWord.length) {
//         biggestWord = array[index];
//     }
// }

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length < smallestWord.length) {
//         smallestWord = array[index];
//     }
// }

// console.log(biggestWord);//javascript
// console.log(smallestWord);//css

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//     let isPrime = true;
//     for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//         if (currentNumber % currentDivisor === 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         biggestPrimeNumber = currentNumber;
//     }
// }

// console.log(biggestPrimeNumber);//47

//Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     inputLine = inputLine + symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     console.log(inputLine);
// };

//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//     console.log(inputLine);
//     inputLine = inputLine + symbol;
// };

//Agora, inverta o lado do triângulo. Por exemplo:
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n - 1;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
//         if (columnIndex < inputPosition) {
//             inputLine = inputLine + ' ';
//         } else {
//             inputLine = inputLine + symbol;
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     inputPosition -= 1;
// };

//Depois, faça uma pirâmide com n asteriscos de base:
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//         if (columnIndex > controlLeft && columnIndex < controlRight) {
//             inputLine = inputLine + symbol;
//         } else {
//             inputLine = inputLine + ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlRight += 1;
//     controlLeft -= 1
// };

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//     let outputLine = '';
//     for (let col = 1; col <= n; col += 1) {
//         if (col == controlLeft || col == controlRight || line == middle) {
//             outputLine += symbol;
//         } else {
//             outputLine += ' ';
//         }
//     }
//     controlLeft -= 1;
//     controlRight += 1;
//     console.log(outputLine);
// }

// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido.Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
    if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');