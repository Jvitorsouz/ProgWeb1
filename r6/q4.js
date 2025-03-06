const jsonVendas = `[
    {"produto": "Notebook", "valor": 4500},
    {"produto": "Smartphone", "valor": 2500},
    {"produto": "Tablet", "valor": 1800},
    {"produto": "Monitor", "valor": 1200}
]`;

const filtrarVendas = (json, minimo) => {
    const vendasObject = JSON.parse(json)
    const filtroVendas = vendasObject.filter(venda => venda.valor >= minimo)
    return {
        totalVendas: filtroVendas.length,
        vendas: filtroVendas
    }
}

console.log(filtrarVendas(jsonVendas, 2000))