function fatorial(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

let n = 12;
console.log(`O fatorial de ${n} é ${fatorial(n)}. `);

