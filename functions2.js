// posso declarar funções dentro de variaveis
//parametros
const sum = function(number1, number2){
    total = number1 + number2 
    return total  
}
let number1 = 34
let number2 = 25
sum(number1, number2) // argumentos

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maca')

// function scope

let subject = 'create video'
function createThink(subject){
    subject = 'study'
    return subject
}
console.log(subject)
console.log(createThink(subject))

sayMyName()
function sayMyName(){
    console.log('Diana')
}

// arrow function
const say = (name) =>{
    console.log('diana');
}
say()

//callback function
function meuName(name){
    console.log('antes de executar a funcao callback')
   name()
   console.log('depois de executar a funcao callback')
}
meuName(
    () => {
        console.log('estou em uma callback')
    }
)

// function() constructor ; expressao new; criar um novo objeto; this keyword

function Person(name){
    this.name = name
    this.walk = function(){
        return "andando"
    }
}
const Diana = new Person("Diana")
const Joao = new Person("Joao")
console.log(Diana.walk())
console.log(Joao.walk())

let name = new String("Diana")
let name = new Date("2021-12-1")

