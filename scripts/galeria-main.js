document.querySelector ('h1').onclick = function(){
     alert ('como se os sonhos tivessem me avisado');
}


let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/teste-1.jpg') {
      minhaImagem.setAttribute ('src','imagens/teste-2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/teste-3.jpg');
    }
}
