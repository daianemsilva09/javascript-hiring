//FizzBuzz
//divisivel por 3 =>'fizz'
//divisivel por 5 =>'buzz'
//divisivel por 3 e 5 =>'fizzbuzz'
// se não for um numero => 'não é um número'
// se não for divisivel nem por 3 e nem por 5 => Entrada
/*
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
*/

// reverter string
/*
let newStr = '';

function reverseString(str) {
    for (let i = str.length -1; i>= 0; i--){
        newStr += str [i];
        console.log(newStr);
    }
}

let resultado = reverseString('hello Gama')
*/


//parei 11:17
//Converter Celsius to fahrenheit

function converToFahrenheit(value){

}

let result = converToFahrenheit(1)
console.log(result);