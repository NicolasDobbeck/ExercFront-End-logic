'use strict'

    function multiplicarDois(){
    const number1 = parseFloat(document.getElementById('number1').value)
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')
    let mult
    if(formExerc.reportValidity()){
        if (number1 > 30) {
            mult  = parseInt(number1) * 2
            resultado.textContent = `O resultado dessa multiplicação é: ${mult}`
        }else if(number1 < 30){
            resultado.textContent = `O número deve ser maior que 30`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', multiplicarDois)