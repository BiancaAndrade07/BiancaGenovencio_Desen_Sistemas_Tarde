
function mascara(o, f) {
objeto = o;
funcao = f;
setTimeout("executarMascara()", 1);
}

function executarMascara() {
objeto.value = funcao(objeto.value);
}

// Máscara para RG e CPF
function RGeCPF(variavel) {
variavel = variavel.replace(/\D/g, "");
variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2");
variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2");
variavel = variavel.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
return variavel;
}

// Somente letras
function somenteLetras(variavel) {
variavel = variavel.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
return variavel;
}

// Somente números
function somenteNumeros(variavel) {
variavel = variavel.replace(/\D/g, "");
return variavel;
}

// Login (letras e números, sem espaços)
function loginUsuario(variavel) {
variavel = variavel.replace(/[^\w]/g, "");
return variavel;
}

// Senha (sem espaços)
function senha(variavel) {
variavel = variavel.replace(/\s/g, "");
return variavel;
}