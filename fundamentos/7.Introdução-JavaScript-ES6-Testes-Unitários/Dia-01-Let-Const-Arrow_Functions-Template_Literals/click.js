let clickCount = 0;
const textToDisplay = document.getElementById('text');
const buttonTest = document.getElementById('button_test');

buttonTest
    .addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1); // exibir a quantidade de clicks

//apagar os clicks:
let clickClear = 0;
const clearToText = document.getElementById('')
buttonClear.target.parentNode.parentNode.remove('clear');