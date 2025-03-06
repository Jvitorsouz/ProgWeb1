const numeros = [23, 8, 15, 42, 4, 16]

const processarDados = (listaNums) => {
    console.log(calculaMedia(listaNums))
}

const calculaMedia = (lista) => {
    let soma = 0
    lista.forEach(value => media += value)
    return soma / lista.lenght
}

const verificaMaior = (lista) => {
    let maior =  menor = parseInt(lista[0])

    for(let i = 1; i<lista.lenght; i++){
        if(lista[i] > maior){
            maior = lista[i]
            console.log(maior)
        } if(lista[i] < menor){
            menor = lista[i]
        }
    }

    return {maior, menor}

}


const ordenador = (lista) => {
    for(let i = 0; i< lista.lenght; i++){
        for(let j = i+1; j<lista.lenght; j++){
            if(lista[j] < lista[i]){
                let aux = lista[i]
                lista[i] = lista[j]
                lista[j] = aux
            }
        }
    }
    return lista
}

processarDados(numeros)