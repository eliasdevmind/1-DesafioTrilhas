 
 function resulatoDaContage(texto){
  let frase = texto;
  let totalLetrasMaiusculas = contadorDeLetrasMaiusculas(frase);
  
  console.log(`Essa frase tem um total de  ${totalLetrasMaiusculas} letras maiúsculas`);

}

function contadorDeLetrasMaiusculas(frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      const caractere = frase[i];
      if (caractere >= 'A' && caractere <= 'Z') {
        contador++;
      }
    }
    return contador;
  }
  
 resulatoDaContage("")
  