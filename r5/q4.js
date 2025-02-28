const atribuirConceito = nota => {
    if (nota >= 0 && nota <= 4.9) return 'D';
    if (nota >= 5.0 && nota <= 6.9) return 'C';
    if (nota >= 7.0 && nota <= 8.9) return 'B';
    if (nota >= 9.0 && nota <= 10.0) return 'A';
    return 'Nota inválida'; 
};


const mostrarConceitos = notas => {
    notas.forEach(nota => {
        const conceito = atribuirConceito(nota);
        console.log(`Nota: ${nota} - Conceito: ${conceito}`);
    });
};


const notas = [4.5, 6.7, 8.1, 9.3, 3.2];

mostrarConceitos(notas);
