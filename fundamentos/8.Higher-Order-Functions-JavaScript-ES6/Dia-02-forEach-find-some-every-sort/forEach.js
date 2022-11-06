// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// Adicione seu código aqui forEach 
// emailListInData.forEach((item) => {
//     showEmailList(item);
// })
//Resultado:
// O email roberta @email.com esta cadastrado em nosso banco de dados!
//------------
// O email paulo @email.com esta cadastrado em nosso banco de dados!
//-----------
// O email anaroberta @email.com esta cadastrado em nosso banco de dados!
//-----------
// O email fabiano @email.com esta cadastrado em nosso banco de dados!

//passando as posições:
// emailListInData.forEach((item, posicao) => {
//     showEmailList(item);
//     console.log(`Sua posição é a de: ${posicao}`); //posiçao de cada banco de dados;
// })
//Resultado:
// O email roberta @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 0
// -------------
// O email paulo @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 1
// -------------
// O email anaroberta @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 2
// O email fabiano @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 3

//adicionar uma lógica condicional: forEachSpe
// emailListInData.forEach((item, posicao, array) => {
//     showEmailList(item);
//     console.log(`Sua posição é a de: ${posicao}`); //posiçao de cada banco de dados;
//     console.log(`A quantidade de pessoas são: ${array.length}`);
// })

//Resultado:
// Sua posição é a de: 0
// A quantidade de pessoas são: 4
// O email paulo @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 1
// A quantidade de pessoas são: 4
// O email anaroberta @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 2
// A quantidade de pessoas são: 4
// O email fabiano @email.com esta cadastrado em nosso banco de dados!
// Sua posição é a de: 3
// A quantidade de pessoas são: 4