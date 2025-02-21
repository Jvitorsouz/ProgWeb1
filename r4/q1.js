const vendas = [
    {produto: "Notebook", preco: 4500, quantidade: 3, vendedor: "Sara"},
    {produto: "Smartphone", preco: 2300, quantidade: 5, vendedor: "Matheus"},
    {produto: "Monitor", preco: 1200, quantidade: 2, vendedor: "Gabriel"},
    {produto: "Teclado Mecânico", preco: 350, quantidade: 4, vendedor: "Sara"},
    {produto: "Monitor", preco: 4500, quantidade: 6, vendedor: "Gabriel"},
    {produto: "Notebook", preco: 1200, quantidade: 3, vendedor: "Matheus"}
]

gerarRelatorio = (vendas) => {
    console.log("Relatório de Vendas: \n")
    let soma = 0
    vendas.forEach(venda => {
        soma += venda.preco * venda.quantidade
        console.log(formart(venda))
        })
    console.log(`Total Geral: R$ ${formatarMoeda(soma)}`)
    comisao(vendas)
}
const comisaoVendedor = {}
const comisao = (vendas) => {
        vendas.forEach(({vendedor, preco, quantidade}) => {
            const totalVenda = preco * quantidade

            if (!comisaoVendedor[vendedor]) {
                comisaoVendedor[vendedor] = 0
            } 

            comisaoVendedor[vendedor] += totalVenda
        })
        totalComisao(comisaoVendedor)
}


const totalComisao = (comisaoV) =>{
    console.log("\nTotal de comissao (5%):")
    for(v in comisaoV){
        console.log(`${v}: R$ ${formatarMoeda(comisaoV[v] * 0.05)}`)
    }
}


const formart = (objeto) => 
`Produto: ${objeto.produto}
Quantidade: ${objeto.quantidade}
Preço Unitário: ${formatarMoeda(objeto.preco)}
Total: R$ ${formatarMoeda(objeto.preco * objeto.quantidade)}
Vendedor: ${objeto.vendedor}
\n`
                
const formatarMoeda = (valor) => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor)

gerarRelatorio(vendas)
