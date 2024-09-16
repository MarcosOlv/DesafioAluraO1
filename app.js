let titulo = document .querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio'

  function verificarBotao() {
    console.log ('o botao foi clicado');
 }
 function verificarAlerta() {
    alert('Eu Amo JS');
 }
 function verificarPrompt() {
    let cidade = prompt('Me Diga Um Nome De Uma Cidade');
    alert (`estive em ${cidade}, e lembrei de você`);
}
//no desafio do alura, cometi esse erro usando prompt onde estão sendo tratadas como string ai ao usar a 
//soma ele faz concatenando as duas strings inves de fazer a soma ficando 1+1 = 2

// ERRO ABAIXO
// function botaoSoma(){
//     let numeroUm = prompt('Digite Um Numero Para Ser Somado.')
//     let numeroDois = prompt('Digite o Segundo Numero Para Ser Somado')
//     let soma = numeroUm + numeroDois
//     alert(`o resultado foi ${soma}`)
// }

// FORMA CORRETA SE DEVE USAR parseInt como abaixo
function botaoSoma(){
    let numeroUm = parseInt(prompt('Digite Um Numero Para Ser Somado.'))
    let numeroDois = parseInt(prompt('Digite o Segundo Numero Para Ser Somado'))
    let soma = numeroUm + numeroDois
    alert(`o resultado foi ${soma}`)
}

