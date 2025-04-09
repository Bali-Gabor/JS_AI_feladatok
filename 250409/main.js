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


/*
2. Számlálás
Feladat: Írj egy függvényt, ami megszámolja, hány páros szám van egy tömbben.
*/

var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function megszamlal(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            darab ++;
        }
    }
    return darab;
}

console.log('A tömbben található páros számok száma: ' + megszamlal(szamok));


/*
3. Eldöntés
Feladat: Döntsd el, hogy van-e a tömbben negatív szám. Igaz/hamis értékkel térjen vissza.
*/

var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, -14, 15, 16, 17, 18, 19, 20];

function eldont(tomb){
    let van = false;
    let i = 0;

    while(i < tomb.length && tomb[i] >= 0){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }
    return van;
}

console.log('A tömbben van negatív szám: ' + eldont(szamok));


/*
4. Kiválasztás
Feladat: Válaszd ki a tömb első pozitív számát.
*/

var szamok = [-1, -2, -3, -4, -5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, -19, 20];

function kivalaszt(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] <=0){
        i ++;
    }
    return i;
}

console.log('A tömb első pozitív elemének indexe: ' + kivalaszt(szamok));
console.log('A tömb első pozitív eleme: ' + szamok[kivalaszt(szamok)]);


/*
5. Keresés
Feladat: Keresd meg, hogy egy adott érték benne van-e a tömbben. A függvény paraméterként kapja meg az értéket is.
*/

var szamok = [-1, -2, -3, -4, -5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, -19, 20];

var keres = 13;

function kereses(tomb, ertek){
    let van = 0;
    let i = 0;

    while(i < tomb.length && tomb[i] != ertek){
        i ++;
    }

    if(i < tomb.length){
        van = i;
    }
    else{
        van = -1;
    }
    return van;
}

console.log('A keresett érték indexe: ' + kereses(szamok, keres));


/*
6. Maximumkiválasztás
Feladat: Add vissza a tömb legnagyobb értékét.
*/

var szamok = [-1, -2, -3, -4, -5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, -19, 20];

function maximum(tomb){
    let index = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] > tomb[index]){
            index = i;
        }
    }
    return index;
}

console.log('A tömb legnagyobb elemének indexe: ' + maximum(szamok));
console.log('A tömb legnagyobb eleme: ' + szamok[maximum(szamok)]);


/*
7. Minimumkiválasztás
Feladat: Add vissza a tömb legkisebb értékét.
*/

var szamok = [-1, -2, -3, -4, -5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, -19, 20];

function minimum(tomb){
    let index = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[index]){
            index = i;
        }
    }
    return index;
}

console.log('A tömb legkisebb elemének indexe: ' + minimum(szamok));
console.log('A tömb legkisebb eleme: ' + szamok[minimum(szamok)]);


/*
8. Szűrés
Feladat: Szűrd ki a páros számokat egy új tömbbe.
 */

var szamok = [-1, -2, -3, -4, -5, 6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, -19, 20];

function szures(tomb){
    let uj = new Array();

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            uj.push(tomb[i]);
        }
    }
    return uj;
}

console.log('A tömbben található páros számok: ' + szures(szamok).join(', '));


/*
9. Rendezés
Feladat: Rendezd a tömböt növekvő sorrendbe.
*/

var szamok = new Array(13, -8, 65, 79, 22, -37, -86, -19, 73, 94, -1);

function rendez(tomb){
    let csere = 0;

    for(let i = 0; i < tomb.length; i ++){

        for(let j = i + 1; j < tomb.length; j ++){

             if(tomb[i] > tomb[j]){
                csere = tomb[i];
                tomb[i] = tomb[j];
                tomb[j] = csere;
             }
        }
    }
    return tomb;
}

console.log('A tömb számai növekvő sorrendben: ' + rendez(szamok));