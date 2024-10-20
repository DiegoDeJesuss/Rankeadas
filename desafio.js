function rankeada(victories = 0, defeats = 0){
    nivel = "ferro"
    if (victories >=11 && victories<=20){
        nivel = "Bronze"
    } else if (victories >=21 && victories <= 50){
        nivel = "Prata"
    } else if (victories >=51 && victories <= 80){
        nivel = "Ouro"
    } else if (victories >=81 && victories <= 90){
        nivel = "Diamante"

    } else if (victories >= 91 && victories <=100){
        nivel = "Lendario"
    } else if (victories >= 101){
        nivel = "imortal"
    }

    return `O Herói tem o saldo de **${victories - defeats}** está no nível **${nivel}**`
}



console.log(rankeada(200,50))