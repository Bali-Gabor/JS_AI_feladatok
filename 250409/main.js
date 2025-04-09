/*
1. Összegzés
Feladat: Készíts egy függvényt, ami egy tömb számértékeit összeadja és visszaadja az összeget.
*/

var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function osszeg(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }
    return sum;
}

console.log('A tömb elemeinek összege: ' + osszeg(szamok));