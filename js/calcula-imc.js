/*Mudar titulo*/
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

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
   if(altura >= 0 && altura <= 3) {
      return true; 
   }else{
      return false;
   }
}

/*Calculo IMC*/
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
   var paciente = pacientes[i];

   var tdPeso = paciente.querySelector(".info-peso");
   var tdAltura = paciente.querySelector(".info-altura");
   var tdImc = paciente.querySelector(".info-imc");

   var peso = tdPeso.textContent;
   var altura = tdAltura.textContent;

   var pesoValido = validaPeso(peso);
   var alturaValida = validaAltura(altura);

   if(!pesoValido) {
      tdPeso.textContent = 'peso inválido';
      paciente.classList.add("paciente-invalido");   
   }
   if(!alturaValida) {
      tdAltura.textContent = 'altura inválida';
      paciente.classList.add("paciente-invalido");
   }

   if(pesoValido && alturaValida) {
      var IMC = calculoImc(peso,altura); 
      tdImc.textContent = IMC;
   }
}

