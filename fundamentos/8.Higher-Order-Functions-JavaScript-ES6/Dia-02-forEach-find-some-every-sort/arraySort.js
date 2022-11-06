// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

//Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

// // Adicione se código aqui
//     people.sort((a, b) => a.name > b.name ? 1 : -1);

// console.log(people);//resultado
// [
//     { name: 'Ana', age: 23 },
//     { name: 'Bruna', age: 19 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'José', age: 16 },
//     { name: 'Mateus', age: 18 }
// ]

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

// // Adicione se código aqui
// people.sort((a, b) => a.age < b.age ? 1 : -1);

// console.log(people);//resultado

// [
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 }
// ]

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

// // Adicione se código aqui
// people.sort((personA, personB) => personB.age - personA.age);

// console.log(people);