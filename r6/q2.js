const frases = [
    "JavaScrpit é poderoso!",
    "Callbacks são úteis",
    "Arrow functions são mais curtas."
]

const analisarTexto = (array, callback) => {
    console.log(callback(array))

}

const contarPalvras = (array) => {
    let soma = 0
    array.forEach(frase => {
        let listaPalvaras = frase.split(" ")
        soma += listaPalvaras.lenght
        console.log(soma)
    })

    console.log(soma)

    return soma
}

analisarTexto(frases, contarPalvras)

