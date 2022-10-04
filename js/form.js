/*Funções*/
function calculoImc (peso,altura){
    var imc = peso / ( altura * altura); 
    return imc.toFixed(2);
}
function validaPeso(peso){
    if(peso >= 0 && peso < 1000) {
       return true; 
    }else{
       return false;
    }
 }
 
 function validaAltura(altura){
    if(altura >= 0 && altura < 3) {
       return true; 
    }else{
       return false;
    }
 }

function obtemPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    }
    return paciente;
} 

function criaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
 
    pacienteTr.appendChild(criaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente){
    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push("O Peso inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");
    if(paciente.nome.length == 0) erros.push("Campo do nome vazio");
    if(paciente.peso.length == 0) erros.push("Campo do peso vazio");
    if(paciente.altura.length == 0) erros.push("Campo da altura vazio");
    if(paciente.gordura.length == 0) erros.push("Campo de gordura vazio");

    return erros;
}

function exibeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function addPaciente(paciente){
    var pacienteTr = criaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};

/*Adicionar Paciente Novo*/

var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(form);

    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibeErro(erros)
        return;
    }
    addPaciente(paciente);
    form.reset();
    document.querySelector("#mensagem-erro").innerHTML = ""
});
