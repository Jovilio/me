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
        btnVoltarParaTopo.style.visibility = "visible";
    } else {
        btnVoltarParaTopo.style.visibility = "hidden";

    }

}
window.addEventListener('scroll', animacaoScrool);

onload = () => {
    if (window.screen.width < 768) {

        var corpo = document.getElementById("corpo");
        // alert("De momento este site não está disponivel no tamanho da sua tela");

        corpo.innerHTML = "Por não ser responsiva por enquanto esta pagina só pode ser visualizada em tablets ou computadores com largura da tela igual ou superior 768 ";
        // document.getElementById("#corpo").innerText = "Pagina indisponivel";
    }
}