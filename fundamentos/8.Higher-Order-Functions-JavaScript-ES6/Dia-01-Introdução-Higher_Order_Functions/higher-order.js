// Crie uma função que retorne a string 'Acordando!!';
// Crie outra função que retorne a string 'Bora tomar café!!';
// Crie mais uma função que retorne a string 'Partiu dormir!!';
// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.Exemplo:
const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};
doingThings(wakeUp); // Acordando!!
doingThings(breakfast); // Bota tomar café!!
doingThings(sleep); // Partiu dormir!!

