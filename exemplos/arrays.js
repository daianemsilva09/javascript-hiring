const alunaGama = ["Paula", "Maria", "Estela", "Clara"]

// acessar informações array

console.log(alunaGama[3]);  //"Clara"

//Operador spread(...)
const alunaXp = [...alunaGama, "Dai"]
console.log(alunaXp)

//Metodos de iteração

for (let i =0; i < alunaXp.length; i++) {
    console.log(alunaXp[i])
}

//Metodos iteração de array
//1 - Map: retornar um novo array sem alterar o array original
//criando uma cópia com as alterações eu desejamos
const alunas =["Paula", "Maria", "Estela", "Clara"]

alunas.map(aluna => console.log(aluna))

//2 - Filter: retornar um novo array com os elementos filtrados
const numeros = [34, 36, 32, 75, 13, 11]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)
//3 - find - encontra e retorne o primeiro elemento
// que achar igual ao elemento passado por parametro.

const produtos = ["prod1", "prod2","prod3", "prod4"]

const encontraProd3 = produtos.find(produto => produto ==="prod3")
console.log(encontraProd3)

const encontraProd2= produtos.find(produto => produto ==="prod2")
console.log(encontraProd2)

//4- sort - ordenar o array 
const num = [32, 89, 76, 10, 110]

const crescente = num.sort((a,b) => a-b)
console.log(crescente)

const decrescente = num.sort((a,b) => b-a)
console.log(decrescente)
//5- reduce - reduz nosso array a um resultado de uma operação matematica

const numbers = [1, 44, 55]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
})

console.log(soma)