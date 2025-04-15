window.addEventListener("load",function(e){
    confirm("Seja Bem-Vindo!")

});

const botao = document.getElementById("btn");

botao.addEventListener("click",selecionaBotao)
function selecionaBotao(){
    alert("O botao foi criado!")
}

const select = document.getElementById("marcas");
select.addEventListener("change",alteraRotulo)
function alteraRotulo(){
    const opcaoTexto = select.options[select.selectedIndex].text;
    alert(opcaoTexto);
    document.body.style.backgroundColor=opcaoTexto;
}