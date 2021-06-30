
//funcion expression
//function anonymous

//parametros (parameters)
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(number1, number2) // arguments - argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

console.log(total)

//função é um liquidificador

function fazerSuco(fruta1, fruta2){
    return 'Suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

//function scope

let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

//FUNCtION HOISTING

//sayMyName()

//function sayMyName(){
//    console.log('William')
//}

//arrow function

const sayMyName = () => {
    console.log('William')
}

sayMyName()

//callback function

function sayMyNames(name){
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyNames(
    () => {
        console.log('Estou em uma callback')
    }
)

/*Function( constructor)
expressão new
criar um novo objeto
this keyword
*/


function person(name){
    this.name = name
    this.walk = function(){
        return this.name + " esta andando."
    }
}
const mayk = new person("Mayk")
const joao = new person("João")
console.log(mayk.walk())
console.log(joao.walk())