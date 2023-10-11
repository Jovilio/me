// const elemento = document.querySelector('[data-anime]');
// const animationClass = 'animar';
var popUp = document.querySelector('.popUp');
var tronco = document.querySelector('.tronco');
var btnVoltarParaTopo = document.querySelector('.btnVoltarParaTopo');
var rodape = document.querySelector('.rodape');
function ver() {
    popUp.style.transform = "translateX(0)";
    // tronco.style.position = 'fixed';
    // rodape.style.position = 'static';
    // popUp.innerHTML = 'Visializando conteudo';
}
function removerVer() {
    popUp.style.transform = "translateX(-100%)";
    // tronco.style.position = 'initial';
}

function animacaoScrool() {
    const windowTopo = window.pageYOffset
    var cabeca = document.querySelector('.cabeca');
    var item = document.querySelector('.item');
    if (windowTopo >= 11) {
        // cabeca.style.boxShadow = "0px 0px 1px 0px rgba(128, 128, 128, 0.61)";
        // cabeca.style.background = "white";
        // cabeca.style.background = "whitesmoke";
        // item.style.boxShadow = "none";
        // btnVoltarParaTopo.style.background = 'orange';
        // btnVoltarParaTopo.style.transform = 'translateY(0px)';
        btnVoltarParaTopo.style.visibility = "visible";
    } else {
        // cabeca.style.boxShadow = "initial";
        // cabeca.style.background = "initial";
        btnVoltarParaTopo.style.visibility = "hidden";

    }

}
window.addEventListener('scroll', animacaoScrool);

onload = () => {
    if (window.screen.width < 1024) {

        var corpo = document.getElementById("corpo");
        // alert("De momento este site não está disponivel no tamanho da sua tela");

        corpo.innerHTML = "Pagina Indisponivel";
        // document.getElementById("#corpo").innerText = "Pagina indisponivel";
    }
}