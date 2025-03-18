
var a = 30
let b = 4 //ES6

console.log(typeof(a), typeof(b)) // expected: number


//let a = 60 // NÃO PODE SER INSTANCIADA NOVAMENTE
var a = 60 // Conseguem ser instanciadas novamente
console.log(a, b)


a = 60
var a = 30
console.log(a, b)

b = 40 // PODE SER REATRIBUIDA
const c = 5

console.log(a, b, c) // EXPECT 30 40 5


//Definir i como var, faz com eu consiga acessar essa variável fora do escopo do for
for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i=', i) 



const functions = []

for (var i = 0; i < 10; i++){
    functions.push(function(){
        console.log(i)
    })
}

functions[5]()
functions[6]()
functions[9]()