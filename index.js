let resultOfVictories = resultForRank (100,15)
let yourNivel = rank(resultOfVictories)

console.log('O Herói tem da saldo de ' + resultOfVictories + ' está no nível de ' + yourNivel)

function resultForRank (victories, losses){
    let points = victories - losses
    return points
}

function rank (resultOfVictories){
    let nivelRank = resultOfVictories

    if (nivelRank <= 10){
        nivel = 'Ferro'
    }else if (nivelRank >= 11 && nivelRank <= 20){
        nivel = 'Bronze'
    }else if (nivelRank >= 21 && nivelRank <= 50){
        nivel = 'Prata'
    }else if (nivelRank >= 51 && nivelRank <= 80){
        nivel = 'Ouro'
    }else if (nivelRank >= 81 && nivelRank <= 90){
        nivel = 'Diamante'
    }else if (nivelRank >= 91 && nivelRank <= 100){
        nivel = 'Lendário'
    }else {
        nivel = 'Imortal'
    }

    return nivel
}

