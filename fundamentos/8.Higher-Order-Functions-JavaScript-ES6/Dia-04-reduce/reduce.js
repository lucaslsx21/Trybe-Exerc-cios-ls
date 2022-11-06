// const numbers = [1, 32, 44, 2, 3];
// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
//     console.log(`valor atual é ${curr}`);
//     // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
//     // Iteração 1: valor do acc é 1 e o de curr é 32;
//     // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
//     // Iteração 2: valor do acc é 33 e o de curr é 44;
//     // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
//     // Iteração 3: valor do acc é 77 e o de curr é 2;
//     // Iteração 4: valor do acc é 79 e o de curr é 3;
//     // Valor final de `acc`é 82 e `curr` para no 3.
//     return acc + curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// });
// console.log(`O resultado final é ${iteracoesDoReduce}`);
//   // por fim, esse console.log imprime o retorno final da nossa função.

// const numbers = [1, 32, 44, 2, 3];
// let sumNumbers = 30;
// // A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!
// for (let index = 0; index < numbers.length; index += 1) {
//     sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 112

// const numbers = [1, 32, 44, 2, 3];
// const totalSum = numbers.reduce((acc, curr) => {
//     console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
//     // Iteração 1: valor do acc é 30 e o de curr é 1
//     // Iteração 2:valor do acc é 31 e o de curr é 32
//     // Iteração 3: valor do acc é 63 e o de curr é 44
//     // Iteração 4: valor do acc é 107 e o de curr é 2
//     // Iteração 5: valor do acc é 107 e o de curr é 3
//     // Valor final de `acc`é 112 e `curr` para no 3
//     return acc + curr;
// }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// console.log(`valor final do acc é ${totalSum}`);
//   // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// const numbers = [1, 32, 44, 2, 3];
// const sumNumbers = (acc, curr) => acc + curr;
// const totalSum = numbers.reduce(sumNumbers, 30);
// console.log(totalSum); //112

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

//Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array:
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const verifyArray = (number) => number % 2 === 0;

// const sumPar = (acumulator, number) => acumulator + number;

// const sumNumbers = (array) => array.filter(verifyArray).reduce(sumPar);

// console.log(sumNumbers(numbers));


//gora crie uma função usando os dados dos estudantes, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!
const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: 59 },
            { name: 'Português', nota: 80 },
            { name: 'Química', nota: 78 },
            { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 76 },
            { name: 'Português', nota: 90 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 91 },
            { name: 'Português', nota: 85 },
            { name: 'Química', nota: 92 },
            { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 70 },
            { name: 'Português', nota: 70 },
            { name: 'Química', nota: 60 },
            { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 80 },
            { name: 'Português', nota: 82 },
            { name: 'Química', nota: 79 },
            { name: 'Biologia', nota: 75 },
        ],
    },
];

// const getBestClass = (acc, materia) => {
//   if (acc.nota > materia.nota) return acc;
//   return materia;
// };

// const reportBetter = (students) => students.map((student) => ({
//   name: student.nome,
//   materia: student.materias.reduce(getBestClass).name,
// }));

// console.log(reportBetter(estudantes));

//Utilize o reduce para transformar uma matriz em um array.
// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];

// const flatten = (arrays) => {
//     // escreva seu código aqui
//     return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }
// console.log(flatten(arrays));
//Resultado:
// [
// '1', '2', '3',
//     true, 4, 5,
//     6
// ]


const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];
// const strings = `George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.`;

// // Adicione o código do exercício aqui:
// const reduceNames = () => {
//     return books.reduce((acc, book) => `${acc} ${book.author.name}.`, '')
// }
// console.log(reduceNames(strings));
//Resultado:
// George R. R. Martin. J. R. R. Tolkien. Isaac Asimov. Frank Herbert. Stephen King. H. P. Lovecraft.

//Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

// const averageAge = () => {
//     // escreva seu código aqui
//     const numberNBooks = books.length;
//     const sumNAges = books.reduce((sum, book) => (
//         sum + (book.releaseYear - book.author.birthYear)
//     ), 0);
//     return sumNAges / numberNBooks;
// }
// console.log(averageAge(books));
// resultado: 43;

//Encontre o livro com o maior nome.
// const expectResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//     },
//     releaseYear: 1991,
// };

// const longestNamedBook = () => {
//     // escreva seu código aqui
//     return books.reduce((stringBook, currBook) => {
//         if (currBook.name.length > stringBook.name.length) {
//             return currBook;
//         }
//         return stringBook;
//     })
// }
// console.log(longestNamedBook());

// {
// id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
// }

//Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
// const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const expectedResult = 20;

// const timesA = () => {
//     // escreva seu código aqui

// //Para cada uma das palavras contar quantas vezes a letra "A" aprece? 
//     let totalTimesA = 0; //Variável que guarda o total de ocorrências das letras "a" e "A"?
//     names.forEach((name) => {
//         const timesFromName = name.split('');
//         totalTimesA += timesFromName.reduce((lettersAInName, currLetter) => { 
//             if (currLetter === 'a' || currLetter === 'A' ) {
//                 return lettersAInName + 1;
//             }
//             return lettersAInName;
//         }, 0);
//     });
//     return totalTimesA;

// }
// console.log(timesA());//resultado 20

//Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map.
const students = ['Lucas Lima', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
//Usando o MAP:
// const studentAverage = () => {
//     // escreva seu código aqui
//     return arrayName = students.map((student, index) => ({
//         name: student,
//         average: (grades[index]),
//     }))
// }

// const expected = [
//     { name: 'Pedro Henrique', average: 7.8 },
//     { name: 'Miguel', average: 9.2 },
//     { name: 'Maria Clara', average: 8.8 },
// ];
// console.log(studentAverage());
//Resultado:
// [
//     { name: 'Pedro Henrique', average: [9, 8, 10, 7, 5] },
//     { name: 'Miguel', average: [10, 9, 9, 10, 8] },
//     { name: 'Maria Clara', average: [10, 7, 10, 8, 9] }
// ]

//Usando REDUCE:
// const studentAverage = () => {
//     // escreva seu código aqui
//     return arrayName = students.map((student, index) => ({
//         name: student,
//         average: (grades[index].reduce((acc, curr) => acc + curr, 0)),
//     }));
// }

// const expected = [
//     { name: 'Pedro Henrique', average: 7.8 },
//     { name: 'Miguel', average: 9.2 },
//     { name: 'Maria Clara', average: 8.8 },
// ];
// console.log(studentAverage());
//Resultado:
// [
//     { name: 'Pedro Henrique', average: 39 },
//     { name: 'Miguel', average: 46 },
//     { name: 'Maria Clara', average: 44 }
// ]

//Redução total do array de notas:
const studentAverage = () => {
    return arrayName = students.map((student, index) => ({
        name: student,
        average: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length
    }));
}

const expected = [
    { name: 'Lucas Lima', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];
console.log(studentAverage());

// [
//     { name: 'Pedro Henrique', average: 7.8 },
//     { name: 'Miguel', average: 9.2 },
//     { name: 'Maria Clara', average: 8.8 }
// ]