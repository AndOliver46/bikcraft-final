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

