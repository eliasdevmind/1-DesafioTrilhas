
console.log("🧙Ordene as formulas em crecente para descobrir o segredo Alquimico");

let frascosMagicos = [12, 5, 23, 17, 8, 14, 3, 19];
let segredoAlquimico = "Abacate🥑";

console.log(frascosMagicos)

function ordenarFrascos(frascos){
    frascos.sort((a, b) => a - b);
};

function verificarOrdemCrescente(frascos) {
    for(let i = 0; i < frascos.length - 1; i++) {
        if(frascos[i] > frascos[i + 1]) {
            return false;
        };
    };
    return true;
};
ordenarFrascos(frascosMagicos);

if(verificarOrdemCrescente(frascosMagicos)) {
    console.log(`Os frascos magicoção ${frascosMagicos}`)
    console.log(`Os frascos estão ordenados. O segredo alquímico é: ${segredoAlquimico}`);
} else {
    console.log("Os frascos não estão em ordem. Organize-os para revelar o segredo alquímico.");
};
