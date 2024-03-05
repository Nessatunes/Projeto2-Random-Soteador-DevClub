// Obtém uma referência para o botão pelo seu ID / mapeando o botao
const sortearButton = document.getElementById('sortearButton');

// Adiciona um manipulador de eventos para o evento 'click'
sortearButton.addEventListener('click', generateNumber);

// Definição da função generateNumber
function generateNumber() {
    const min = Math.ceil(document.getElementById('input-min').value);
    const max = Math.floor(document.getElementById('input-max').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;   

    alert(result);  
}
  