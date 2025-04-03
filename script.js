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


})