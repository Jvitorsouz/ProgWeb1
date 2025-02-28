const isPrimo = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};


const numerosPrimos = (inicio = 0, fim = 100) => {
    if (inicio > fim) [inicio, fim] = [fim, inicio];

    for (let i = inicio; i <= fim; i++) {
        if (isPrimo(i)) {
            console.log(i);
        }
    }
};


numerosPrimos(10, 30);  
