let clienteJSON = `[
    {"nome": "Lucas", "idade": 30, "email": "lucas@email.com"},
    {"nome": "Mariana", "idade": 25, "email": "mariana@email.com"}    
]`;

const adicionarCliente = (json, nome, idade, email) => {
    let clientes = JSON.parse(json)
    const novoCliente = {
        nome: nome,
        idade: idade,
        email: email
    }
    clientes.push(novoCliente)
    return json = JSON.stringify(clientes)
};

const buscarCliente = (json, nome) => {
    let clientes = JSON.parse(json)
    let cliente = clientes.filter(clt => clt.nome === nome)[0]
    if(cliente){
        return `Cliente encontrado: \nNome: ${cliente.nome} \nIdade: ${cliente.idade} \nEmail: ${cliente.email}\n`
    }
    return "Cliente não encontrado!\n"
};

clienteJSON = adicionarCliente(clienteJSON, "Roberto", 40, "roberto@email.com");
console.log(buscarCliente(clienteJSON, "Mariana"));
console.log(buscarCliente(clienteJSON, "Inexistente"));
console.log(buscarCliente(clienteJSON, "Roberto"));