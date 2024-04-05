let HP = 100
let dano = 20

console.log(`Vamos comesar o jogo você tem ${HP}`)
while( HP >= dano){
      HP = HP - 20
     console.log(`Você recebel uma 🔪atk perdel ${dano} de HP seu HP agora é ${HP} `)
}

if(HP == 0){
    console.log("Você Morrel ☠👻")
}else{
    console.log("É impossivel você esta vivo com esse codigo a não ser que tenha mudado o codigo 😡😡😡")
}