const frases = [
    "JavaScript é poderoso!",
    "Callbacks são úteis",
    "Arrow functions são mais curtas."
]

const analisarTexto = (array, callback) => {
    return callback(array)

}

const contarPalavras = (array) => {
    let soma = 0
    array.forEach(frase => {
        let listaPalavras = frase.split(" ")
        soma += listaPalavras.length
    })


    return soma
}

const maiorFrase = (array) => {
    let maiorFrase = array[0]
    for(let i = 1; i<array.length; i++){
        if(array[i].length > maiorFrase.length){
            maiorFrase = array[i]
        }
    }

    return maiorFrase
}

console.log(analisarTexto(frases, contarPalavras))
console.log(analisarTexto(frases, maiorFrase))

