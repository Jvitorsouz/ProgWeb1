const universidade = "Universidade Federal de Campina Grande"

console.log(universidade.charAt(4)) // Expected: e
console.log(universidade.charAt(-1)) // Expected: 
console.log(universidade.charAt(300)) // Não imprime nada porque essa posição não existe

console.log(universidade.charCodeAt(3))
console.log(universidade.indexOf('d'))



console.log(universidade.substring())
console.log(universidade.substring(13))
console.log(universidade.substring(5, 10))
console.log(universidade)


console.log('Universidade: ' + universidade + "!")
console.log(universidade.replace('sidade', 'aew'))


let str = 'Twas the knight before Xmas...'
console.log(str)
let newstr = str.replace(/xmas/i, 'Christmas') //uso de expressao regular para encontrar o xmas
console.log(newstr)

console.log('Adrier, Lewis, MelJael'.split(',')[1][1]) 
//Primeiro dividi, a string em uma lista a partir da separação por virgula
//imprime o primeiro caracter do elemento na posicao 1





