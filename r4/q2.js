const clientes = [
    {nome: "Davi", email: "davi@email.com", plano: "Premium", ativo: true},
    {nome: "Mariana", email: "mariana@email.com", plano: "Básico", ativo: false},
    {nome: "Gabriel", email: "gabriel@email.com", plano: "Padrão", ativo: true},
    {nome: "Ana", email: "ana@email.com", plano: "Premium", ativo: false},
    {nome: "Huandrey", email: "huandrey@email.com", plano: "Padrão", ativo: true}
]

gerarEmail = (cliente) => {
    console.log(`Para: ${cliente.email}
Olá, ${cliente.nome}!`)

    if(cliente.ativo){
        console.log(gerarEmailAtivo(cliente))
    }else{
         console.log(gerarEmailInativo(cliente))
    }

    console.log(`Atenciosamente,
Equipe StreamingWeb.\n`)
    
}

gerarEmailInativo = (cliente) =>
`\nNotamos que sua assinatura do plano ${cliente.plano} está inativa.
Que tal voltar e aproveitar nossos conteúdos exclusivos?
\nReative agora e continue sua experiência conosco!`

gerarEmailAtivo = (cliente) =>
`\nObrigado por ser um assinante do plano ${cliente.plano}!
Estamos felizes em tê-lo conosco.
\nCaso precise de suporte, estamos à disposição.`

main = (users) => {
    users.forEach(user => {
        gerarEmail(user)
    });
}

main(clientes)