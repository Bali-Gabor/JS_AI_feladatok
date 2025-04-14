/*
🧠 Feladat: Tanulók jegyei – objektumokkal és tételekkel
📋 Feladatleírás:
Adott egy tömb, amely tanulókat tartalmaz. Minden tanuló egy objektum, aminek a következő tulajdonságai vannak:

nev – a tanuló neve,

jegyek – egy számokat tartalmazó tömb (az adott tanuló jegyei, 1–5 között).


Végezd el a következőket:

✅ 1. Kiválogatás tétel
Keresd meg azokat a tanulókat, akiknek csak jó jegyeik vannak (min. 3-as)!
✅ 2. Összegzés tétel
Számold ki minden tanuló átlagát, és mentsd el egy új tulajdonságként (atlag) az objektumba!
✅ 3. Minimumkeresés tétel
Állapítsd meg, ki a leggyengébben teljesítő tanuló (akinek a legkisebb az átlaga)!
💡 Plusz: keresés tétel
Kérdezd le, hogy van-e olyan tanuló, akit "Kata"-nak hívnak, és ha van, írd ki az adatait.
*/


function kivalogatas(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){
        let van = false;

        for(let j = 0; j < tomb[i].jegyek.length; j ++){

            if(tomb[i].jegyek[j] < 3){
                van = true;
            }
        }
        if(van != true){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}


function atlag(tomb){

    for(let i = 0; i < tomb.length; i ++){
        let osszeg = 0;

        for(let j = 0; j < tomb[i].jegyek.length; j ++){
            osszeg += tomb[i].jegyek[j];
        }

        let atl = osszeg / tomb[i].jegyek.length;
        tomb[i].atlag = atl;
    }
}


function leggyengebb_tanulo(tomb){
    let index = 0;

    for(let i = 0; i < tomb.length; i ++){
        
        if(tomb[i].atlag < tomb[index].atlag){
            index = i;
        }
    }
    return index;
}


function kereses(tomb, tulajdonsag){
    let index = 0;
    let i = 0;

    while(i < tomb.length && tomb[i].nev != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        index = i;
    }
    else{ 
        index = -1;
    }

    return index;
}


var tanulok = [
    { nev: "Anna", jegyek: [4, 5, 3, 4] },
    { nev: "Bence", jegyek: [2, 3, 2, 3] },
    { nev: "Kata", jegyek: [5, 5, 5, 5] },
    { nev: "Dani", jegyek: [3, 2, 3, 4] }
];

var jo_tanulok = [];

kivalogatas(tanulok, jo_tanulok);

for(let i = 0; i < jo_tanulok.length; i ++){
    console.log(jo_tanulok[i].nev);
}

atlag(tanulok);

for(let i = 0; i < tanulok.length; i ++){
    console.log(tanulok[i].nev + ' tanulmányi átlaga: ' + tanulok[i].atlag);
}

console.log('Az osztály leggyengébb tanulója: ' + tanulok[leggyengebb_tanulo(tanulok)].nev);

var keres = 'Kata';

var k = kereses(tanulok, keres);

if(k >= 0){
    console.log(keres + ' nevű tanuló szerepel a listában.')
    console.log('\tNév: ' + tanulok[k].nev + '\n\tOsztályzatok: ' + tanulok[k].jegyek.join(', ') + '\n\tTanulmányi átlag: ' + tanulok[k].atlag);
}
else{
    console.log(keres + ' nevű tanuló nincs a listában.');
}