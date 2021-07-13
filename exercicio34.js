//receber 3 notas e calcular média
// maior que 7 - aprovado
// entre 5 e 7 recuperação
// menor reprovado

function calcularMedia(nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3)/3

    if (media >= 7){
        return 'aprovado'
    }
    if (media>=5 && media<7){
        return 'recuperação'
    }
    if (media < 5){
        return 'Reprovado'
    }
}

console.log (calcularMedia(2,2,7))
