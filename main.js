// requerendo elemento selecionando
const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 6;

//passando parâmetros na função e adicionando elemento interno tag ul
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ // mostrar o próximo botão se o valor da página for maior que 1.
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="bi bi-chevron-left"></i></span></li>`;
  }

  if(page > 2){ // se a página tiver o valor menor do que 2 então adiciona 1 depois do botão "previous"
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
  }

  // como muitas páginas ou li mostrar o anterior li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // como muitas páginas ou li mostrar depois li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //se "plength" for maior do que "totalPage"o tamanho "continue"
      continue;
    }
    if (plength == 0) { //se o "plength" é 0 então adiciona +1 no valor do "plength"
      plength = plength + 1;
    }
    if(page == plength){ // se a página é igual ao "plength" então atribuir "active" na variável "active"
      active = "active";
    }else{ //else deixará vazio a variável "active"
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ // se a página tem um valor menor do que "totalPage - 1" então mostrar o último li ou página

    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //mostar o botão "next" se a valor da página for menor que totalPage(10)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span><i class="bi bi-chevron-right"></i></span></li>`;
  }
  element.innerHTML = liTag; // adiciona li tag dentro ul tag
  return liTag; //retorna a li tag
}

