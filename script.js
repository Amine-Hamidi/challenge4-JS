function moyenne(score1, score2, score3){
    let moyenne = ( score1 + score2 + score3 ) / 3;
    return moyenne;
}

equipeDauphins1 = moyenne(96, 108, 89).toFixed(2);
equipeKoalas1 = moyenne(88, 91, 110).toFixed(2);

equipeDauphins2 = moyenne(97, 112, 101).toFixed(2);
equipeKoalas2 = moyenne(109, 95, 123).toFixed(2);

equipeDauphins3 = moyenne(97, 112, 101).toFixed(2);
equipeKoalas3 = moyenne(109, 95, 106).toFixed(2);

function checkWinner(equipe1, equipe2){
    
    if ( (equipe1 > equipe2) ){
        if(equipe1>100){
            console.log("le gagnant de la compétition est l'équipe des Dauphins avec une moyenne de: "+equipe1+ " alors que l'équipe adverse a eu: "+equipe2);
        }else {
            console.log("Dommage aucune équipe n'as réussie a atteindre la moyenne nécessaire "+equipe1);
        }
        
    }else if ( equipe2 > equipe1 ){
        if(equipe2>100){
            console.log("le gagnant de la compétition est l'équipe des Koalas avec une moyenne de: "+equipe2+ " alors que l'équipe adverse a eu: "+equipe1);
        }
        else {
            console.log("Dommage aucune équipe n'as réussie a atteindre la moyenne nécessaire la plus haute moyenne est: "+equipe2);
        }
    } else {
        console.log("Egalité !! l'équipe de Koalas ont eu: "+equipe2+" et l'équipe des Dauphins ont eu: "+equipe1);
    }

}
checkWinner(equipeDauphins1,equipeKoalas1);
checkWinner(equipeDauphins2,equipeKoalas2);
checkWinner(equipeDauphins3,equipeKoalas3);