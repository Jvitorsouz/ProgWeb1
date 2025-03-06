const numeros = [23, 8, 15, 42, 4, 16]

const processarDados = (listaNums) => {
    const {maior, menor} = verificaMaiorMenor(listaNums)
    return {
        media: calculaMedia(listaNums),
        maior,
        menor,
        ordenado: ordenador(listaNums)
    }
}

const calculaMedia = (lista) => {
    let soma = 0
    lista.forEach(value => soma += value)
    return soma / lista.length
}

const verificaMaiorMenor = (lista) => {
    let maior =  menor = lista[0]
    for(let i = 1; i<lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i]
        } if(lista[i] < menor){
            menor = lista[i]
        }
    }

    return {maior, menor}

}

const ordenador = (lista) => {
    for(let i = 0; i< lista.length; i++){
        for(let j = i+1; j<lista.length; j++){
            if(lista[j] < lista[i]){
                let aux = lista[i]
                lista[i] = lista[j]
                lista[j] = aux
            }
        }
    }
    return lista
}

console.log(processarDados(numeros))