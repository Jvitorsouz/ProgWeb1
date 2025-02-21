const usuarios = [
    {nome: "Cleciana", idade: "25", ativo: "true", saldo: "1234.56"},
    {nome: "Gustavo", idade: "30", ativo: true, saldo: 980},
    {nome: "Rayane", idade: null, ativo: "false", saldo: "1500.90"},
    {nome: "Igor", idade: "NaN", ativo: 1, saldo: undefined},
    {nome: "Samuel", idade: "22 anos", ativo: false, saldo: "0"}
]

const normalizarUsuario = (usuario) => {
    return {
        nome: usuario.nome,
        idade: corrigirIdade(usuario.idade),
        ativo: corrigirAtivo(usuario.ativo),
        saldo: corrigirSaldo(usuario.saldo)
    };
};

const corrigirIdade = (idade) => {
    if (typeof idade === "number" && Number.isInteger(idade)) return idade;
    if (typeof idade === "string" && idade.trim() !== "") {
        if (/\D/.test(idade)) return null;
        const idadeConvertida = parseInt(idade, 10);
        return isNaN(idadeConvertida) ? null : idadeConvertida;
    }
    return null;
};

const corrigirAtivo = (ativo) => {
    if (typeof ativo === "boolean") return ativo;
    if (ativo === "true" || ativo === 1) return true;
    if (ativo === "false" || ativo === 0) return false;
    return false; // Valor padrão
};

const corrigirSaldo = (saldo) => {
    if (typeof saldo === "number") return parseFloat(saldo.toFixed(2));
    if (typeof saldo === "string" && saldo.trim() !== "") {
        const saldoConvertido = parseFloat(saldo);
        return isNaN(saldoConvertido) ? 0.00 : parseFloat(saldoConvertido.toFixed(2));
    }
    return 0.00;
};

const usuariosNormalizados = usuarios.map(normalizarUsuario);
console.log(usuariosNormalizados);