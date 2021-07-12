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
/*
function converToFahrenheit(value){
    return value * 1.8 + 32

}

let result = converToFahrenheit(40)
console.log(`o valor em fahrenheit é ${result}`)
*/

// Criar elementos 
/*
const listContainer = document.querySelector ('[data-lists]')
const newListForm = document.querySelector ('[data-new-list-form]')
const newListInput = document.querySelector ('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function (e){
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()

})

function createList(name) {
    return {id: Date.now().toString(), name: name}
}

function render() {
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })

    function clearElement(element) {
        while (element.firstChild){
            element.removeChild(element.firstChild)
        }
    }

  
}
*/

