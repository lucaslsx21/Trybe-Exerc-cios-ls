//substituir a letra
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' - '); //o split serve para separar as frases;
    //laço de repetição
    for (let index = 0; index < fraseArray.length; index += 1) {
        //estrutura condicional
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome; //troca o valor do x dentro do array pelo nome recebido por parametro;
        }
    }
    return fraseArray.join(' '); //retona a string, ou seja, restaurar a funcao;
};
//console.log(substituaX('te espero'));

//retorno da funcao:
const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `${func} Aprendendo essas habilidades que são:`;
    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado} 
            - ${skills[index]}`;
    }
    return resultado;
}
console.log(minhasSkills(substituaX('Lucas')));