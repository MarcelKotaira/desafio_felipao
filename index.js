let nome = "Avatar"
let xp = 0
let nivel = "Ferro"
let derrotado = false
let vida = 100

console.log("O herói " + nome + " começou a jornada!")

do {
    console.log(nome + " encontrou um inimigo!!!")

    let danoRecebido = Math.floor(Math.random() * 100 + 1);
    console.log(nome + " recebeu " + danoRecebido + " de dano")
    vida -= danoRecebido
    console.log("Vida restante: " + vida)

    if(vida > 0) {
        console.log(nome + " derrotou o inimigo!")
        xp += 1000
        vida += 30 
    }
    else {
        console.log(nome + " foi derrotado!")
        derrotado = true
    }

    console.log()

} while(!derrotado)

if(xp < 1000) {
    nivel = "Ferro"
}
else if(xp < 2000) {
    nivel = "Bronze"
}
else if(xp < 5000) {
    nivel = "Prata"
}
else if(xp < 7000) {
    nivel = "Ouro"
}
else if(xp < 8000) {
    nivel = "Platina"
}
else if(xp < 9000) {
    nivel = "Ascendente"
}
else if(xp < 10000) {
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

console.log(`O Herói de nome "${nome.toUpperCase()}" está no nível de "${nivel.toUpperCase()}"`)