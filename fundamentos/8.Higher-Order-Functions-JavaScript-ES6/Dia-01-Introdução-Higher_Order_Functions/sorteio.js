//Vamos criar uma callback que verifica se os números são os mesmos.
//Vamos começar a trabalhar em nossa HOF, iniciando pelo gerador do número aleatório.
//Vamos utilizar nossa callback, já temos o parâmetro number dentro do escopo da função. Precisamos só dizer à Hof que ela receberá por parâmetro nossa callback e também o número escolhido.
//Nossa função já retorna casos verdadeiros e falsos, vamos atribuir nossas mensagens à esses cenários e retorná-las.
const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}; //Dia de sorte, você ganhou! --- Tente novamente!
console.log(lotteryResult(2, numberChecker));