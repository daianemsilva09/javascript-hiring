const livros = require('./database')
//console.log(livros)

// pegar o input
//Se for sim, mostra as categorias! pergunta Qual escolhe 

//Se não, mostra todos os livros em ordem crescente pela duração


const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis')
    console.log(['Categoria 1', 'Categoria 2', 'Categoria 3','Categoria 4', 'Categoria 5'])

    const entradaCategoria = readline.question('Qual você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.duracao - b.duracao)
    console.log('Esses são os disponiveis:')
    console.table(livrosOrdenados)

}