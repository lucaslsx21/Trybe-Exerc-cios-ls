// const numbers = [1, 2, 3];

// const newArray = ["Novos arrays foram adicionados", 4, 5, 6, 7, 8, 9, 10, ...numbers];
//console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
//console.log(numbers); // [ 1, 2, 3 ]

//======================================================================

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// //console.log(months);

//=======================================================================

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// //console.log(imc(...patientInfo)); // 20.76

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

//console.log(Math.max(...randomNumbers)); // 800
//console.log(Math.min(...randomNumbers)); // 5

//=========================================================================

// const people = {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
// };

// const about = {
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer',
// };

// const customer = { ...people, ...about };

//console.log(customer);

//=============================================================================

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Maçã', 'Uva', 'Banana'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Biscoito', 'Chocolate', 'Bala'];

// const fruitSalad = (fruit, additional) => {
//     // Escreva sua função aqui
//     const frutasOutros = [...fruit, ...additional];
//     return frutasOutros;
// };

//console.log(fruitSalad(specialFruit, additionalItens));
//[ 'Maçã', 'Uva', 'Banana', 'Biscoito', 'Chocolate', 'Bala' ]

//==========================================================================
//Aula ao vivo:
// const horrorMovies = ['Get Out', 'Us', 'Ma'];
// const scifiMovies = ['Blade', 'MIB', 'Tenet', 'I Am Legend'];
// const name = ['Lucas']

// const awesomeMovies = [...horrorMovies, ...scifiMovies, ...name];
// console.log(awesomeMovies);

//==========================================================================

// SPREAD OPERATOR - Operador de espalhamento
//exiba todas as informações do array sem usar um loop
// const array = ["Ana Joana", "Alberto", "Joaquim"];
// // console.log(array[0], array[1], array[2]);
// console.log(...array.join('-'));