// Basta usarmos os spread operator para que ele passe cada medida do retângulo como um parâmetro da função.
// const rectangleArea = (width, height) => width * height;
// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];
// rectangles.forEach((rectangle) => {

//     console.log(rectangleArea(...rectangle));
// });

//=============================================================
// Basta usarmos os spread operator para que ele passe cada medida do retângulo como um parâmetro da função.
// const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

//=============================================================
// Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa(variáveis alex e gunnar), retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// const alex = {
//     name: 'Alex',
//     age: 26,
//     likes: ['fly fishing'],
//     nationality: 'Australian',
// };
// const lucas = {
//     name: 'Lucas',
//     age: 33,
//     likes: ['hiking', 'scuba diving', 'taking pictures'],
//     nationality: 'Icelandic',
// };
// const personLikes = ({ name, age, likes }) => (
//     `${name} is ${age} years old and likes ${likes.join(', ')}.`
// );
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(lucas)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//=================================================================
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:
// const people = [
//     {
//         name: 'Nicole',
//         bornIn: 1992,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Harry',
//         bornIn: 2008,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Toby',
//         bornIn: 1901,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Frida',
//         bornIn: 1960,
//         nationality: 'Dannish',
//     },
//     {
//         name: 'Fernando',
//         bornIn: 2001,
//         nationality: 'Brazilian',
//     },
//     // bornIn: nascido em
// ];

// // escreva filterPeople abaixo
// //...
// const filterPeople = (arr) => {
//     return people.filter(({ nationality, bornIn }) => {
//         return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2002;
//     });
// }
// console.log(filterPeople());

//========================================================
// Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados.Detalhe: você precisa fazer essa função gastando apenas 1 linha.O retorno da função utilizando o array myList deve ser[3, 2, 5].
// const myList = [5, 2, 3];
// const swap = ([a, b, c]) => [c, b, a];
// console.log(myList);

//=======================================================
// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array.Então seu chefe pede que seja mudado o formato de array para objeto.Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo
// const toObject = ([name, brand, year]) => ({ name, brand, year });
// console.log(toObject(palio));

// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
// const ships = [
//  {
//    name: 'Titanic',
//    length: 269.1,
//    measurementUnit: 'meters',
//  },
//  {
//    name: 'Queen Mary 2',
//    length: 1132,
//    measurementUnit: 'feet',
//  },
//  {
//    name: 'Yamato',
//    length: 256,
//    measurementUnit: 'meters',
//  },
// ];
// const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;
// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

//================================================================
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento.Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
// const greet = (name, msg = 'Hi') => `${msg} ${name}`;
// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

//===============================================================
// Existe um objeto yearSeasons que representa as estações do ano.Cada estação é uma chave deste objeto, e o valor de cada chave é um array de strings, representando os meses daquela estação.A partir deste objeto, desestruture as estações do ano e espalhe - as em um array de meses do ano.
// const yearSeasons = {
//   spring: ['March', 'April', 'May'],
//   summer: ['June', 'July', 'August'],
//   autumn: ['September', 'October', 'November'],
//   winter: ['December', 'January', 'February'],
// };
// const { spring, summer, autumn, winter } = yearSeasons;
// const months = [...spring, ...summer, ...autumn, ...winter];
// console.log(months); // ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
