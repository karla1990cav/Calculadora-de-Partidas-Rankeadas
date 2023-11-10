let heroiNome = "Andor";
let heroiPoder = 5020;

let nivel = "";

if (heroiPoder <= 1000) {
    nivel = "ferro";
}else if (heroiPoder >= 1001 && heroiPoder <= 2000){
    nivel = "Bronze";
}else if (heroiPoder >= 2001 && heroiPoder <= 5000){
    nivel = "Prata";
}else if (heroiPoder >= 5001 && heroiPoder <= 7000){
    nivel = "Ouro";
}else if (heroiPoder >= 7001 && heroiPoder <= 8000){
    nivel = "Platina";
}else if (heroiPoder >= 8001 && heroiPoder <= 9000){
    nivel = "Ascendente";
}else if (heroiPoder >= 9001 && heroiPoder <= 10000){
    nivel = "Imortal";
}else {
    nivel = "Radiante";
}


console.log('O Herói de nome ' + heroiNome + ' está no nível de ' + nivel);

