// if  ... else
/*
function calculaIdade(idade){

if (idade >= 18){
    return 'maior de idade'
} else {
    return 'menor de idade'
}
}
*/
function calculaIdade(idade){
    return idade >= 18 ? 'maior de idade' : 'menor de idade'
}

console.log(calculaIdade(19));