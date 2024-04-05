//AVISO❗
// A vantagem desse codigo que vc pode usar a mesma função para encontra O maior e menor de diversas lista


// Lista de números a serem analisados
let numeros = [15, 8, 90, 75, 102, 6, 2];

// Chamada da função para encontrar o menor e o maior número na lista 'listas'
encontrarMenorEMaior(numeros);


// Função que encontra o menor e o maior número em uma lista de números
function encontrarMenorEMaior(listas) {
    let menor = listas[0];
    let maior = listas[0];

    for (let i = 1; i < listas.length; i++) {
        if (listas[i] < menor) {
            menor = listas[i];
        };
        if (listas[i] > maior) {
            maior = listas[i];
        };
    };
    console.log(`App para descubri o maio e o menor numero pra vc não se preocupa😖 com isso e poder descansar🥱😴`);
    console.log(`Os valores da lista são: ${listas}`);
    console.log(`O menor número é: ${menor} ➖`);
    console.log(`O maior número é: ${maior} ➕`);
}

