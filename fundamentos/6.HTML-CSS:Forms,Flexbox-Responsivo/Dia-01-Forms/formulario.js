//Primeiramente devemos criar uma função que será o segundo parâmetro do eventListener:
function handleSubmit(event) {
    event.preventDefault();
}
//Para isso, colocaremos então o addEventListener dentro do window.onload.
window.onload = function () {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
};
//Agora vamos criar as função responsável por limpar essas informações:
function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}
//Agora vamos habilitar essa função em nosso botão:
window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
};
//Agora vamos fazer a função responsável por habilitá-lo:
function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
}
//Assim como as demais, vamos adicionar essa função num addEventListener, porém com checkBoxes não usamos 'click' e sim 'change'.
window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
};
//Primeiramente faremos a função que validará esses dados:
function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const name = document.querySelector('#fullName').value.length;
    const invalidName = name < 10 || name > 40;

    const reason = document.querySelector('#why').value.length;
    const invalidReason = reason > 500;

    if (invalidEmail || invalidName || invalidReason) {
        return false;
    }
    else {
        return true;
    }
}
//Agora vamos colocá-la dentro da nossa função handleSubmit que já está funcionando.
function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}
