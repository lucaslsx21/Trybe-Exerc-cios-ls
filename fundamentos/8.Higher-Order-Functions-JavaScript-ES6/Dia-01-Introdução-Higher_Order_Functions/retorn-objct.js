//Começamos criando nossa função. Sabemos que recebemos o nome completo por parâmetro e que ele deve ser parte do nosso retorno. Vamos começar por aí.
//Podemos agora nos preocupar com o email. O enunciado diz que ele deve ser gerado a partir do nome passado como parâmetro. Vamos separá-lo em itens divididos pelo espaço utilizando o split e então juntá-lo novamente utilizando o caractere “_” utilizando o join. Depois podemos passá-lo no retorno usando template literals e completando o domínio do email.
//Basta agora passarmos nossa função como parâmetro numa HOF que executará essa função para cada chave id presente.

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
};
const newEmployees = (callback) => {
    const employees = {
        id1: callback('Lucas Lima'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };
    return employees;
};
console.log(newEmployees(employeeGenerator));