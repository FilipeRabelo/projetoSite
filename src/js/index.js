const imagensPainel = document.querySelectorAll(".imagem-painel"); 
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem => {    
        imagem.classList.remove("mostrar");
    });
}

function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add("mostrar");
}


// quando clicar na seta para avancar temos q esconder
//     todas as imagens e mostrar a proxima imagem

setaAvancar.addEventListener("click", function () {
    
    //teste se o contador da imagem atual e igual ao total de imagens 

    const totalDeImagens = imagensPainel.length -1;

    if(imagemAtual === totalDeImagens){      
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagens();
});

setaVoltar.addEventListener("click", function() {

    if(imagemAtual === 0){        
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagens();

})





