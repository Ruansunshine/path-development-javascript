let listaDeNumerosSorteados = [];
let numMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas =1;
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou');
        let palavraTent = tentativas > 1?  'tentativas': 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTent} !`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
      if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparCampo();
}
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2}, (err) => {
        if(err) console.error('Erro no ResponsiveVoice:', err);
    });
}

function  exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
function gerarNumeroAleatorio(){
 let numeroGerado =  parseInt(Math.random() * numMaximo + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

 if(quantidadeDeElementosNaLista == numMaximo){
    listaDeNumerosSorteados = [];
 }
 if(listaDeNumerosSorteados.includes(numeroGerado)){
    return gerarNumeroAleatorio();
 }else{
    listaDeNumerosSorteados.push(numeroGerado);
    console.log(listaDeNumerosSorteados);
    return numeroGerado;
 }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
  numeroSecreto  = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);

}
