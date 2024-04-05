function notas(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(`Sua primeira nota foi ${nota1}, a segunda ${nota2} e a terceira ${nota3}.`);
    return media;
}


let mediaFinal = notas(8, 9, 7);


if (mediaFinal >= 7 && mediaFinal <= 10) {
    console.log(`Você passou de ano com média ${mediaFinal}. 😇`);
} else if (mediaFinal < 7 && mediaFinal >= 0) {
    console.log(`Que pena! Você reprovou com média ${mediaFinal}. Te vejo de novo no próximo ano. 😈`);
} else {
    console.log("Erro: as notas do aluno não podem ultrapassar 10 ou serem menores do que 0, pois a média deve estar entre 0 e 10.");
}