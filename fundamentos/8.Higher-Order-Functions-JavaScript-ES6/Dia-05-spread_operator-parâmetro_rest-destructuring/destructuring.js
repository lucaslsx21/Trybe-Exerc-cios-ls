// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
//console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//console.log(weekend); // ['Saturday', 'Sunday']

//const weekdays = [...workDays, ...weekend];
//console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática


// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
// };

// const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
// };
//Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// const Infos = {
//     ...user,
//     ...jobInfos,
// };
//Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// const { name, age, nationality, profession, squad, squadInitials } = Infos;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);
//Resultado:
//"Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic."

//=================================================================
//OBJECT DESTRUCTURING
// Extraia as informações de name e birthplace do objeto para montar uma frase!
// const richestDuckInTheWorld = {
//     name: 'Scrooge McDuck',
//     birthplace: 'Glasgow, Scotland',
//     city: 'Duckburg',
//     jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
// };

// //const name = richestDuckInTheWorld.name;
// //const birthplace = richestDuckInTheWorld.birthplace
// const { jobs, name, birthplace } = richestDuckInTheWorld;
// // console.log( `${name} from ${birthplace}`);
// const [third, first, second] = jobs
// //console.log(first, second, third);
// //console.log(third, first, second);
// console.log(richestDuckInTheWorld.name, richestDuckInTheWorld.birthplace, richestDuckInTheWorld.city, richestDuckInTheWorld.jobs);

//====================================================================
//DEFAULT PARAM E DESTRUCTURING
// Faça uma função que receba um objeto representando um animal e retorne sua massa.

//DEFAULT PARAM
//função que recebe o nome de um usuário para fazer um saudação
//Caso um usuário não seja passado deve retornar "Hi Tryber"
// const hiUser = (user = "Tryber") => {
//     return `Hi! ${user}`;
// };
// console.log(hiUser());

// const blueWhale = {
//     name: 'Balaenoptera musculus',
//     commonName: 'Blue whale',
//     weightRange: {
//         min: 45,
//         max: 173,
//         measurementUnit: 't'
//     }
// };

// const polarBear = {
//     name: 'Ursus maritimus',
//     commonName: 'Polar Bear',
//     weightRange: {
//         min: 350,
//         max: 700
//     }
// };

//Lion (Panthera leo) weighs around 186.55-225 kg
// const lion = {
//     name: 'Panthera leo',
//     commonName: 'Lion',
//     weightRange: {
//         min: 186.55,
//         max: 225,
//         measurementUnit: 'kg'
//     }
// };

// 'Lion (Panthera leo) weighs around 186.55-225 kg'
// const animalDescription = (animal) => {
//   const {name, commonName, weightRange} = animal;
//   return `${commonName} (${name}) weighs around ${weightRange.min}-${weightRange.max} ${weightRange.measurementUnit}`
// }

// const animalDescription = ({ name, commonName, weightRange: { min, max, measurementUnit = 'kg' } }) => {
//     const { min, max, measurementUnit = 'kg' } = weightRange;
//     return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`
// }

// console.log(animalDescription(polarBear));