const filmes =[
    {
        id:1,
        titulo:"filme 1",
        descricao:"descrição filme 1",
        duracao:120
    },
    {
        id:2,
        titulo:"filme 2",
        descricao:"descrição filme 2",
        duracao:110
    },
    {
        id:1,
        titulo:"filme 3",
        descricao:"descrição filme 3",
        duracao:100
    },
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))
