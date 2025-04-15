const fundo = document.getElementById("fundo")
const cor = fundo.style.backgroundColor="grey"
fundo.style.padding="50px"

function E1(){
     const texto = document.getElementById("texto").value;
     let textoVerificado=texto.startsWith("Olá");
     console.log(textoVerificado);
 }
 function E2(){
     const texto = document.getElementById("texto2").value;
      let textoVerificado=texto.endsWith("ção");
     console.log(textoVerificado);
}


    const paragrafo=document.getElementById("text");
    paragrafo.style.display="none";
    paragrafo.style.color="white";

function E3(){
    if (fundo.style.backgroundColor === "grey"){
        fundo.style.backgroundColor="green";
     }
     else if(fundo.style.backgroundColor === "green"){
        fundo.style.backgroundColor="grey";
     }
}

function E4(){
    if(paragrafo.style.display==="none"){
        paragrafo.style.display="block";
    }
    else if (paragrafo.style.display==="block"){
        paragrafo.style.display="none";
    }
    
}



function E5(){
    
    const aumentar = document.getElementById("aumentar");
    
    let tamanho = aumentar.style.fontSize;

    if(tamanho === ""){
        tamanho = "16px";
    }
    let tamanhoNumero=parseInt(tamanho);
    aumentar.style.fontSize=(tamanhoNumero + 2) +"px";

}