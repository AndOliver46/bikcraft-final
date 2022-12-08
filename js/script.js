//Ativar links menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("header-active");
  }
}

links.forEach(ativarLink);

//Ativar itens orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  //const elemento = document.querySelector("#" + parametro);
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-control");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");

  if (resposta.classList.contains("ativa")) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Imagens bicicletas
const imagens = document.querySelectorAll(".bicicleta-imagens img");
const imagensContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  if (
    matchMedia("(min-width:920px)").matches ||
    (matchMedia("(min-width:460px)").matches &&
      matchMedia("(max-width:800px)").matches)
  ) {
    imagensContainer.prepend(img);
  }
}

function imagemClick(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

imagens.forEach(imagemClick);

//Animação
if(window.SimpleAnime){
  new SimpleAnime();
}

