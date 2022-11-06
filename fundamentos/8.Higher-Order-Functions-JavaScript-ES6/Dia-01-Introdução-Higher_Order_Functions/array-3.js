//Vamos criar nossa callback. Ela deve verificar se a resposta do aluno está certa, errada ou inexistente, e assim atribuir a devida pontuação.
//Iniciaremos nossa HOF, ela receberá os mesmos parâmetros da callback mais a callback em si. Para contagem dos pontos teremos um contador que será alterado por um loop for que irá percorrer pelo array de respostas corretas. Vamos começar com essa estrutura.
//A cada iteração utilizaremos nossa callback. Como parâmetros utilizamos o index do loop para compararmos as respostas corretas com as do estudante.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};
const countPoints = (rightAnswers, studentAnswers, action) => {
    let counter = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        counter += actionReturn;
    }
    return `Resultado final: ${counter} pontos`;
};
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));