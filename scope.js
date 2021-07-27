{
    let y = 0
    console.log('existe y antes?', y);
}
// declaração
var name

//atribuição de valores
name = "Diana"

//que tipo de dado foi colocado na variavel usa-se typeof
console.log(typeof name)

//let age = 25
//let isHuman = true

//posso fazer assim tambem

let age, isHuman
age = 25
isHuman = true
console.log(name, age, isHuman)

//concatenando os dados
console.log('a ' + name + ' tem ' + age + ' anos')

// interpolando valores com template literals
console.log(`a ${name} tem ${age} anos`)
