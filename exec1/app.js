'use strict'

function mostrarDiferenca(){
    const number1 = parseFloat(document.getElementById('number1').value)
    const number2 = parseFloat(document.getElementById('number2').value)
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')

    if(formExerc.reportValidity()){
        let subtracao
        if (number1 > number2) {
            subtracao = number1 - number2
            resultado.textContent = `O resultado dessa operação é ${subtracao}`

        }else{
            subtracao = number2 - number1
            resultado.textContent = `O resultado dessa operação é ${subtracao}`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', mostrarDiferenca)