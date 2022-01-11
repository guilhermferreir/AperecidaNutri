let pacientes = document.querySelectorAll(".paciente");
for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    let tdImc = paciente.querySelector(".info-imc");
    let pesoEhvalido = validaPeso(peso);
    let alturaEhvalida = validaAltura(altura);
    if(!validaPeso(peso)){
        tdPeso.textContent = "peso invalido";
        pesoEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(!validaAltura(altura)){
        tdPeso.textContent = "altura invalido";
        alturaEhvalida = false;
        paciente.classList.add("paciente-invalido");
    }
    if(pesoEhvalido && alturaEhvalida){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    let imc = peso/(altura * altura);
    return imc.toFixed(2);
}