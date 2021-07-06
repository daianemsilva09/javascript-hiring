//FizzBuzz
//divisivel por 3 =>'fizz'
//divisivel por 5 =>'buzz'
//divisivel por 3 e 5 =>'fizzbuzz'
// se não for um numero => 'não é um número'
// se não for divisivel nem por 3 e nem por 5 => Entrada

let resultado = fizzBuzz(7);
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !=='number')
        return 'Não é um número';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';

    return entrada;

}