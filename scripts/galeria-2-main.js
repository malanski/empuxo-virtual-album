document.querySelector ('h1').onclick = function(){
     alert ('como se os sonhos tivessem me avisado');
}


let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
  let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/teste-4.jpg') {
      minhaImagem.setAttribute ('src','imagens/teste-5.jpg');
      } else {
      minhaImagem.setAttribute ('src','imagens/teste-6.jpg');
        }
}
