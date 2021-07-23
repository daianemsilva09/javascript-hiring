const pessoa = {
    nome: "Dai",
    idade: 32,
    cidade: "Campinas"
}

//Notação de ponto

console.log(pessoa.nome) //Dai

//Notação colchete 

console.log(pessoa['idade']) //32

//Como desestruturar Objeto
const {nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)

