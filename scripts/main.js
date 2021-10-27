let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/sonoluminescente-black.jpg') {
      minhaImagem.setAttribute ('src','imagens/sonoluminescente-invert.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/sonoluminescente-black.jpg');
    }
}


let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('salve salve, qualé o seu nome?');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'obrigado por ouvir, ' + meuNome;
}


if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'obrigado por ouvir, ' + nomeGuardado;
}

function defineNomeUsuario() {
  let meuNome = prompt('salve salve, qualé o seu nome?');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'obrigado por ouvir, ' + meuNome;
  }
}


meuBotao.onclick = function() { defineNomeUsuario();
}
