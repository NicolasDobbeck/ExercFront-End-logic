'use strict'

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value)
    const nota2 = parseFloat(document.getElementById('nota2').value)
    const nota3 = parseFloat(document.getElementById('nota3').value)
    const nota4 = parseFloat(document.getElementById('nota4').value)
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')
    let media
    if (formExerc.reportValidity()) {
        if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ||
            nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 || nota1 < 0 ||
            nota2 < 0 || nota3 < 0 || nota4 < 0) {
            alert('Erro, Digite números validos');
        } else {
            media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

        } if (media >= 5) {
            resultado.textContent = `Aluno Aprovado \n média: ${media}`
        } else{
            resultado.textContent = `Aluno Reprovado \n média: ${media}`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', calcularMedia)