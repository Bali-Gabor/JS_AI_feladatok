/*
🧮 Feladat:
Számold meg, hány darab negatív szám szerepel a szamok tömbben!
*/

var szamok = [91, -52, 36, 48, -75, 62, 71, 18, -9, 10];

function megszamol(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] < 0){
            darab ++;
        }
    }

    return darab;
}

console.log('A tömben szereplő negatív értékek száma: ' + megszamol(szamok));