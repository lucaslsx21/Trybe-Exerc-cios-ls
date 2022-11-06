// Solução com Arrow_functions
//Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
const changeText = () => {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Ganhar 3.500 e estar em um empresa cabulosa!!";
};
changeText();

//Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const changeSquareToGreen = () => {
    let squareYellow = document.getElementsByClassName('main-content')[0];
    squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();

//Crie e execute uma função que mude a cor do quadrado vermelho para branco.
const changeSquareToWhite = () => {
    let squareRed = document.getElementsByClassName('center-content')[0];
    squareRed.style.background = "white";
}
changeSquareToWhite();

//Crie e execute uma função que corrija o texto da tag <h1>.
const correctTitle = () => {
    let title = document.getElementsByTagName('h1')[0];
    title.innerHTML = "Exercício 5.1 - JavaScript";
}
correctTitle();

//Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
const paragraphUpperCase = () => {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

//Crie e execute uma função que exiba o conteúdo de todas as tags<p> no console.
const showParagraphs = () => {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
    }
}
showParagraphs();