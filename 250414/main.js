/*
🔧 Feladat: Számfeldolgozás több tétellel
Készíts egy JavaScript programot, amely a következőket hajtja végre egy tömbön:

Páros számok kiválogatása egy új tömbbe.

A páros számok közül a legkisebb érték indexének meghatározása.

Ellenőrizze, hogy szerepel-e benne egy keresett szám (keresés tétel).

Ha benne van, írja ki az indexét (kiválasztás tétel).
*/

var szamok = [12, 5, 8, 21, 6, 18, 33, 4, 7];
var keresett_szam = 6;
var paros_szamok = new Array();


function kivalogat(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}


function minimum(tomb){
    let min = 0;

    for(let i = 0; i < tomb.length; i ++){
        
        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}


function kereses(tomb, tulajdonsag){
    let i = 0;
    let ertek = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        ertek = i;
    }
    else{
        ertek = -1;
    }

    return ertek;
}


function kivalasztas(tomb, tulajdonsag){
    let i = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    return i;
}


kivalogat(szamok, paros_szamok);
var legkisebb_index = minimum(paros_szamok);
var van = kereses(paros_szamok, keresett_szam);

if(van >= 0){
    console.log('A keresett érték indexe: ' + kivalasztas(paros_szamok, keresett_szam));
}

