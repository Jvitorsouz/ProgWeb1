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
    vendas.forEach(venda => 
        soma += (venda.preco * venda.quantidade),
        console.log(formart(venda)))
  
}


const formart = (objeto) => 
`Produto: ${objeto.produto}
    Quantidade: ${objeto.quantidade}
Preço Unitário: ${objeto.preco}
Total: R$ ${objeto.preco * objeto.quantidade}
Vendedor: ${objeto.vendedor}
\n`
                            

gerarRelatorio(vendas)