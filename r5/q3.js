
const progressaoAritmetica = ({ n, a1, r }) => {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }

    console.log(`PA (${n} termos): ${termos.join(", ")}`);
    console.log(`Soma dos termos da PA: ${soma}`);
};

const progressaoGeometrica = ({ n, a1, r }) => {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }

    console.log(`PG (${n} termos): ${termos.join(", ")}`);
    console.log(`Soma dos termos da PG: ${soma}`);
};

const parametrosPA = { id: 1, nome: "PA", n: 5, a1: 2, r: 3 };
const parametrosPG = { id: 2, nome: "PG", n: 5, a1: 2, r: 3 };

progressaoAritmetica(parametrosPA);
progressaoGeometrica(parametrosPG);
