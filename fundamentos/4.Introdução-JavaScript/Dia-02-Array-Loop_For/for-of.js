//O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros, mas vamos focar somente nesses dois!
// let numeros = [1, 2, 3, 4, 5];
// for (let numero of numeros) {
    //console.log(numero);
//}

// resultado: 
//1
//2
//3
//4
//5

//O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros.
// let word = 'Hello';
// for (let letter of word) {
    //console.log(letter);
//}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//Por fim, com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//     sum += 1;
    //console.log(sum);
    // 11
    // 21
    // 31
    //console.log(arrOfNumbers);
    // Resultado: [10, 20, 30]
//}

//Utilize o for/of para imprimir os elementos da lista names com o console.log():
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let index of names) {
//     //console.log(index);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for (let index = 0; index < numbers.length; index += 1) {
//     //console.log(numbers[index]);
// }

// Some todos os valores contidos no array e imprima o resultado;
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }

//console.log(result);
// Calcule e imprima a média aritmética dos valores contidos no array;
// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let average = sum / numbers.length;

// console.log(average);
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }

// result = result / numbers.length;

// if (result > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }
// Utilizando for, descubra qual o maior valor contido no array e imprima - o;
// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, vamos iniciar a variável com o primeiro valor do array. Dessa forma, podemos pular a posição 0 e iniciar com index = 1

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > higherNumber) {
//         higherNumber = numbers[index];
//     }
// }

// console.log(higherNumber);
// Descubra quantos valores ímpares existem no array e imprima o resultado.Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         result += 1;
//     }
// }

// if (result === 0) {
//     console.log('nenhum valor ímpar encontrado');
// } else {
//     console.log(result);
// }
// Utilizando for, descubra qual o menor valor contido no array e imprima - o;
// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variável com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < smallestNumber) {
//         smallestNumber = numbers[index];
//     }
// }

// console.log(smallestNumber);
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// let numbers = [];

// for (let index = 1; index <= 25; index += 1) {
//     numbers.push(index);
// }

// console.log(numbers);
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
};

