
const pesoElemento = 1.2 
const pesoQuimico = Number("2.0") //cast de uma string para number

console.log(typeof(pesoElemento), typeof(pesoQuimico)) //Expect Number


console.log(pesoElemento, pesoQuimico)
console.log(Number.isInteger(pesoElemento)) // Não é integer pois é um ponto flutuante
console.log(Number.isInteger(pesoQuimico)) // Ao fazer o cast, como a casa decimal foi zero, ele faz um cast para inteiro


const avaliacaoProduto = 9.871
const avaliacaoElemento = 6.871
const total = avaliacaoProduto * pesoElemento + avaliacaoElemento * pesoQuimico
const media = total / (pesoElemento + pesoQuimico)
console.log(media)
console.log(Number(media).toString(2)) //Converte para binario



console.log((0.1 + 0.7).toFixed(2)) // Arredonda para duas casas decimais
console.log((0.794).toFixed(2))




console.log(typeof media)
console.log(typeof Object) //Um object é uma função


console.log(0/0) // Expect: NaN -> Not a Number
let numero = "123e5" //NOtacao cientifica

console.log(typeof(numero)) //Expect: String
console.log(3 + + numero) //Os dois faz com que o ultimo + converta a str para int


console.log((2+2) + "2") //Concatenacao de valores
console.log('-3' - (-2)) //Expected: -1
console.log("show!" * 2) //Expected: NaN
console.log((0.1 + 0.7).toFixed(2))


console.log((0.1 + 0.7).toFixed(3) - (0.1 + 0.7).toFixed(1))
console.log((0.1 + 0.7).toFixed(1))
console.log((10.36).toFixed(1))


//console.log((0.4 + 0.7))

