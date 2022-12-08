const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  if(location.href.includes(link.href)){
    link.classList.add("header-active");
  }
}

links.forEach(ativarLink);