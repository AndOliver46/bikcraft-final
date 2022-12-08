//Ativar links menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  if(location.href.includes(link.href)){
    link.classList.add("header-active");
  }
}

links.forEach(ativarLink);

//Ativar itens orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
  //const elemento = document.querySelector("#" + parametro);
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-control");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");

  if(resposta.classList.contains('ativa')){
    pergunta.setAttribute('aria-expanded', 'true');
  }else{
    pergunta.setAttribute('aria-expanded', 'false');
  }
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
