// USANDO VAR:
// Vamos agora pensar em variáveis declaradas dentro do escopo de um bloco de código - como o corpo de um if ou um for.Acompanhe o exemplo abaixo e não deixe de testá - lo no seu editor de código:
if (true) {
    // inicio do escopo do if
    var userAge = '20';
    //console.log(userAge); // 20
    // fim do escopo do if
}
//console.log(userAge); // 20
// ===============================================
// var userName = 'Isabella';
// var userName = 'Lucas';
//console.log(userName); // Resultado: Lucas
//=================================================
//USANDO Hoisting
// age = 20;

// var age;

// console.log(age); // 20
//=================================================
// var age;

// age = 20;

// console.log(age); // 20
//=================================================
// var age;

// console.log(age); // undefined

// age = 20;

//---------------------------------------------------------------------
// USANDO LET:
// function userInfo() {
//     let userEmail = 'lucas@email.com';

//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     //console.log(userEmail);
// }
// userInfo();
// =================================================
// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
//console.log(favoriteTechnology); // Facial recognition

//---------------------------------------------------------------------------
// USANDO CONST:
// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
//console.log(favoriteLanguage); // Erro
// ==================================================
// const userInfo = {
//     name: 'Cláudio',
//     id: '5489-2',
//     email: 'claudio@email.com',
// };
// userInfo.name = 'João';

//console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//======================================================
// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro
