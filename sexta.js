function fatorial(numero) {
    if(numero === 0) {
        return 1;
    } else {
        return n * fatorial(numero - 1);
    }
}

let n = 12;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}. `);

