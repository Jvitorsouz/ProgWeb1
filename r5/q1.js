const http = require('https')

const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        "cep":'hacked, pay to recover',
        "logradouro": 'hacked, pay to recover',
        "complemento": 'hacked, pay to recover',
        "bairro": 'hacked, pay to recover',
        "localidade": 'hacked, pay to recover',
        "uf": '',
        "geo": {
            "lat": "-23.61919020307765",
            "lng": "-46.70793551534256"
        }
    }
}

const getEndereco = cep => {
    const url = `https://viacep.com.br/ws/${cep}/json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Saída esperada: Silvio Santos - 05650-000 - Morumbi, São Paulo (-23.61919020307765,-46.70793551534256)

getEndereco('05650000').then(endereco => {
    const {cep, bairro, localidade} = endereco
    const {lat, lng} = dono.endereco.geo

    console.log(`${dono.proprietario} - ${cep} - ${bairro} - ${localidade} (${lng}, ${lat})`)
})
