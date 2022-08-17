'use strict'

    function positivoNegativo(){
    const number1 = parseFloat(document.getElementById('number1').value)
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')
    let avalia
    if(formExerc.reportValidity()){
        if (number1 < 0) {
            avalia = number1 * -1
            resultado.textContent = `O resultado dessa operacao é: ${avalia}`
        }else{
            resultado.textContent = `O resultado é positivo`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', positivoNegativo)