/*Funções */
function busca() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length>0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nomePaciente = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nomePaciente)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            };
        };
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        };
    };
    

};

/*Aplicação*/
var campoBusca = document.querySelector("#filtrar-tabela")
campoBusca.addEventListener("input", busca)
