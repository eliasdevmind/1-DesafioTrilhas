function sementePrimo(semente) {
    for(let i = 2, raiz = Math.sqrt(semente); i <= raiz; i++)
        if(semente % i === 0) return false; 
    return semente > 1;
}

let sementes = [23, 16, 11, 8, 19, 14, 5, 21];
console.log(`🤔Quas as sementes🥑 primas para eu plantar⛺?\n ${sementes}`)
let primas = sementes.filter(sementePrimo);

console.log(`As sementes primas que o fazendeiro deve plantar são: ${primas}`);
