/*Funções*/
function addPaciente(paciente){
    var pacienteTr = criaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};

function buscarPaciente(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var dados = xhr.responseText;
            var pacientes = JSON.parse(dados);

            pacientes.forEach(function(paciente){
                addPaciente(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        };
    });
    xhr.send();
};


/*Aplicação*/
var botao = document.querySelector("#buscar-pacientes")
botao.addEventListener("click",buscarPaciente)