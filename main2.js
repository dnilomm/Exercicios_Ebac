const form = document.getElementById("form");
const pesoDoUsuario = document.getElementById("peso");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const dataNascimento = document.getElementById("dataNascimento");
const altura = document.getElementById("altura");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validaPeso(pesoDoUsuario) === true){
        alert("Sua doação é muito importante e pode salvar uma vida!");
        nome.value = '';
        sobrenome.value = '';
        dataNascimento.value = '';
        altura.value = '';
        pesoDoUsuario.value = '';
        telefone.value = '';
        email.value = '';
    }
    else {
        alert("Agradecemos pelo seu interesse em nos ajudar, mas você precisa pesar no mínimo 51kg.");
    }
})

function validaPeso(pesoCadstrado){
    const aprovado = pesoCadstrado.value;
    return aprovado >= 51;
}

