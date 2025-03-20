function imprimirSoma(a, b){ //Os parametros são inicializados com undefined
    console.log(a+b)
}

imprimirSoma(3, 4) 
imprimirSoma('3') // Como não se passa o outro valor, vai ser assumir que b = undefined
imprimirSoma(3, 5, 6, 7) // Apenas leva em consideração os dois primeiros valores
imprimirSoma() // Expected: NaN, pois não foi passado nenhum parametro

//Parameter Default

function soma(a = 2, b = 1){ //Declarando parametros default, que ao serem passados na funcao podem ser reatribuidos
    console.log(a+b)
}

soma() //Expected: 3
soma(0,1) //Expected: 1
soma(undefined, 6) //Expected: 8 -> Vai usar o parametro default para a

/*
let soma_02 = function (a = 2, b = 1){
    console.log(a+b)
}*/

//soma_02(3, 6)


let soma_02 = (a=1, b=2) => a + b //arrow function
console.log(soma_02(5, 6))


subtracao = (a=1, b=3) => a + b //arrow function
console.log(subtracao(5, 6))

const impressao = a => console.log(a)

impressao(`${subtracao(20)} Que Beleza!`)
