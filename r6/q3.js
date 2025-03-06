const funcionarios = [
    {nome: "Ana", cargo: "Desenvolvedora",  salario: 7000},
    {nome: "Carlos", cargo: "Gerente", salario: 12000},
    {nome: "Beatriz", cargo: "Analista", salario: 5000}
]

const gerarRelatorio = (dados) => {
    let result = "Relatório de Funcionários \n------------------------------\n"
    let somaSalario = 0
    dados.forEach(dado => {
        result += `Nome: ${dado.nome} - Cargo: ${dado.cargo} - Salário: ${formatarMoeda(dado.salario)}\n`
        somaSalario += dado.salario
    })

    result += "------------------------------\n"     
    result += `Total de funcionários: ${dados.length} \nSalário médio: R$ ${formatarMoeda(somaSalario/dados.length)}`
    return result

}


const formatarMoeda = (valor) => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor);

console.log(gerarRelatorio(funcionarios))