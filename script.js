// Obtém uma referência para o botão pelo seu ID / mapeando o botao
const sortearButton = document.getElementById('sortearButton');


// Adiciona um manipulador de eventos para o evento 'click'
sortearButton.addEventListener('click', generateNumber);


// Definição da função generateNumber
function generateNumber() {
    const min = Math.ceil(document.getElementById('input-min').value);
    const max = Math.floor(document.getElementById('input-max').value);

    if (min >= max){
        alert('O valor minimo tem que ser MENOR que o valor Máximo')
    }else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;   

    alert(result); 

    }     

     // Limpar os campos de entrada
     //min = '';
    // max = ''; pesquisar não deu certo limpar os campos
}
  