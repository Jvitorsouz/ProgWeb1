const funcionarios = [
    {nome: "Ana", cargo: "Desenvolvedora",  salario: 7000},
    {nome: "Carlos", cargo: "Gerente", salario: 12000},
    {nome: "Beatriz", cargo: "Analista", salario: 5000}
]

const gerarRelatorio = (dados) => {
    let result = "Relatório de Funcionários \n"
    let somaSalario = 0
    dados.forEach(dado => {
        result += `Nome: ${dado.nome} - Cargo: ${dado.cargo} - Salário: ${dado.salario}\n`
        somaSalario += dado.salario
    })

    result += `Total de funcionários: ${dados.lenght} \nSalário médio: R$ ${somaSalario/dados.lenght}`
    return result

}

console.log(gerarRelatorio(funcionarios))