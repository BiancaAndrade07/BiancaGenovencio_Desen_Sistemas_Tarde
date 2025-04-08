//EXECUTAR MASCARAS 
//DEFINE O OBJETO E CHAMA FUNÇAO
function mascara(o,f) { 
Objeto=o
funcao=f
setTimeout("executarMascara()",1)
}

function executarMascara(){
    objeto.value=funcao(objeto.value)
}

//mascaras

//mascara do telefone

//A LINHA ABAIXO É RESPONSÁVEL DE ADICIONAR PARENTESES EM VOLTA DOS DOIS PRIMEIROS DÍGITOS
function telefone(variavel){
    variavel=variavel.replace(/\D/g,"") // Remove tudo o que não é dígito
    variavel=variavel.replace (/^(\d\d)(\d)/g,"($1) $2")

    variavel=variavel.replace(/(\d{4})(\d)/, "$1-$2") // coloca a segunda barra
return variavel
}

//Mascara do RG e CPF 
function RGeCPF (variavel){
    variavel=variavel.replace(/\D/g,"") // Remove tudo o que não é número

    variavel=variavel.replace(/(\d{3})(\d)/, "$1-$2")// coloca um ponto após o TERCEIRO dígito e o QUARTO dígito
    variavel=variavel.replace(/(\d{3})(\d)/, "$1-$2")// coloca um ponto após o SEXTO dígito e o SÉTIMO dígito
    variavel=variavel.replace(/(\d{3})(\d{1,2})$/, "$1-$2")// 
    return variavel
}

//Mascara do CEP
function cep (variavel){
    variavel=variavel.replace(/\D/g,"") // Remove tudo o que não é número

    variavel=variavel.replace(/(\d{2})(\d)/, "$1.$2")
    variavel=variavel.replace(/(\d{3})(\d{1,3})$/, "$1-$2")
    return variavel
}

//Mascara DATA
function data (variavel){

    variavel=variavel.replace(/\D/g,"") // Remove tudo o que não é número
    variavel=variavel.replace(/(\d{2})(\d)/, "$1/$2")
    variavel=variavel.replace(/(\d{2})(\d)/, "$1/$2")
    return variavel
   
}