/*Objetivo: quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuário e esconde o conteudo da aba anterior

passo 1 -Selecinar os elementos que representam as abas no HTML
passo 2- escutar o clique no elemento aba
passo 3- desmarcar a aba selecionada quando o usuario clicar
passo 4- marcar a aba clicada como selecionada
passo 5- esconder o conteudo anterior
passo 6- mostrar o conteudo da aba atual





*/

//passo 1 -Selecinar os elementos que representam as abas no HTML

const abas = document.querySelectorAll('.aba');
console.log(abas);

//passo 2- escutar o clique no elemento aba

abas.forEach(aba => {
  aba.addEventListener('click', function () {
    if (aba.classList.contains('selecionado')) {
      return;
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  });
});

function selecionarAba(aba) {
  //passo 3- desmarcar a aba selecionada quando o usuario clicar
  const abaSelecionada = document.querySelector('.aba.selecionado');
  abaSelecionada.classList.remove('selecionado');

  //passo 4- marcar a aba clicada como selecionada
  aba.classList.add('selecionado');
}

function mostrarInformacoesDaAba(aba) {
  //passo 5- esconder o conteudo anterior
  const informacaoSelecionada = document.querySelector(
    '.informacao.selecionado'
  );

  informacaoSelecionada.classList.remove('selecionado');

  // passo 6- mostrar o conteudo da aba atual
  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

  const informacaoASerMostrada = document.getElementById(
    idDoElementoDeInformacoesDaAba
  );
  informacaoASerMostrada.classList.add('selecionado');
}
