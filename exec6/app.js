'use strict'

    function numerosInteiros(){
    const number1 = parseFloat(document.getElementById('number1').value)
    const number2 = parseFloat(document.getElementById('number1').value)
    const number3 = parseFloat(document.getElementById('number1').value)
    const number4 = parseFloat(document.getElementById('number1').value)
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')
    if(formExerc.reportValidity()){
        if (number1 % 2 == 0 || number1 %3 ==0) {
            resultado.textContent = `O numero e divisivel por 2 ou 3`
        }else{
            resultado.textContent = `O numero 1 nao é divisel por 2 ou 3`
        }
        if (number2 % 2 == 0 || number2 %3 ==0) {
            resultado.textContent = `O numero é divisivel por 2 ou 3`
        }else{
            resultado.textContent = `O numero 2 nao é divisel por 2 ou 3`
        }
        if (number3 % 2 == 0 || number3 %3 ==0) {
            resultado.textContent = `O numero e divisivel por 2 ou 3`
        }else{
            resultado.textContent = `O numero 3 nao é divisel por 2 ou 3`
        }
        if (number4 % 2 == 0 || number4 %3 ==0) {
            resultado.textContent = `O numero e divisivel por 2 ou 3`
        }else{
            resultado.textContent = `O numero 4 nao é divisel por 2 ou 3`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', numerosInteiros)