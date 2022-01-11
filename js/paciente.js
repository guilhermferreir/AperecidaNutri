let botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(e){
    e.preventDefault();
    let form = document.querySelector("#form-adiciona");
    let paciente = obtemDadosDoForm(form);
    let erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMsgDeErros(erros);
        return;
    }
    addPacienteNaTabela(paciente);
    form.reset();
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
})

function obtemDadosDoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function validaPaciente(paciente){
    let erros = [];
    if(paciente.nome.length == 0){erros.push("nome nao pode ser em branco")};
    if(paciente.nome.length == 0){erros.push("peso nao pode ser em branco")};
    if(paciente.nome.length == 0){erros.push("altura nao pode ser em branco")};
    if(paciente.nome.length == 0){erros.push("gordura nao pode ser em branco")};
    if(!validaPeso(paciente.peso)){erros.push("peso invalido")};
    if(!validaAltura(paciente.altura)){erros.push("altura invalida")};
    return erros;
}

function exibeMsgDeErros(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function addPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente){
    let tr = document.createElement("tr");
    tr.classList.add("paciente");
    let nome = montaTd(paciente.nome, "info-nome");
    let peso = montaTd(paciente.peso, "info-peso");
    let altura = montaTd(paciente.altura, "info-altura");
    let gordura = montaTd(paciente.gordura, "info-gordura");
    let imc = montaTd(paciente.imc, "info-imc");
    tr.appendChild(nome);
    tr.appendChild(peso);
    tr.appendChild(altura);
    tr.appendChild(gordura);
    tr.appendChild(imc);
    return tr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}