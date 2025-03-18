const nome = 'Demetrio'

const stringConcatenada = 'Olá ' + 
nome + 
'!'; // Concatenação de string usando operador +


console.log(stringConcatenada)


const template = `Olá ${nome}!` //Concatenacao usando template string

console.log(template)

console.log(`1 + 1 = ${1+1}`)


const caixaAlta = texto => texto.toUpperCase() //arrow function -> receve um texto e retorna ele em caixa alta
console.log(`Ei... 
${caixaAlta('Cuidado')}!`)
