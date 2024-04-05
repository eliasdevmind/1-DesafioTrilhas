function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    let mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    return idade;
}


let dataNascimento = "1990-05-15";
let idade = calcularIdade(dataNascimento);
console.log(`Ei, olha só, descobri que você tem ${idade} anos de pura vivacidade! 🎉`);
