let listaDeNumero = [];
let numeroMax = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    var armazen = document.querySelector(tag);
    armazen.innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto('h1', 'Olá, seja bem vindo ao jogo do número secreto.');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroMax}`);
}

mensagemInicial();

function verificarChute() {
    var chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        limparcampo()
         exibirTexto('h1', 'Parabéns!!!');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}:)`;
         exibirTexto('p', `${mensagemTentativas}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('h1', 'Errou!!!');
            exibirTexto('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTexto('h1', 'Errou!!!');
            exibirTexto('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparcampo()
    }
}
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let  quantidadeDeElementos = listaDeNumero.length;

    if (quantidadeDeElementos == numeroMax){
        listaDeNumero = []
    }

    if (listaDeNumero.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumero.push(numeroEscolhido);
        console.log(listaDeNumero);
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparcampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}