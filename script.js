document.addEventListener('DOMContentLoaded',function(){
    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade=document.getElementById('opcoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click',function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-list');

const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true'

botaoDeAcessibilidade.satAttribute('aria-expanded', !botaoSelecionado)

})

const aumentaFontBotao=document.getElementById('aumentaar-fonte');
const diminuirFontBotao=document.getElementById('diminuir-fonte');

const alternarContraste=document.getElementById('alterna-constrante');

let tamanhoAtualFonte = 1;

aumentaFontBotao.addEvertLintener('clich', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fonSize=`${tamanhoAtualFonte}rem` 
})

diminuirFontBotao.addEvertLintener('clich', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fonSize=`${tamanhoAtualFonte}rem` 
})

alternarContraste.addEvertLintener('click', function (){
    document.body.classLint.toggle('alto-contraste')
})

})

scrollReveal().reveal('#inicio', {delay: 500})
scrollReveal().reveal('#tropicalia', {delay: 500})
scrollReveal().reveal('#galeria', {delay: 500})
scrollReveal().reveal('#contato', {delay: 500})