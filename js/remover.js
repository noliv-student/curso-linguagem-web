/*Funções*/
function removePaciente(event){
    var alvo = event.target;
    var alvoPai = alvo.parentNode

    alvoPai.classList.add("fadeOut")
    setTimeout(function(){
        alvoPai.remove();
    }, 500);

}

var tabela = document.querySelector("tbody");
tabela.addEventListener("dblclick",removePaciente);

