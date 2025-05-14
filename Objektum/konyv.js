/**
Hozz létre legalább 3 könyv objektumot, és tedd őket egy konyvtar nevű tömbbe.

Írj egy függvényt, amely kiírja az összes könyv címét és szerzőjét.

Írj egy másik függvényt, ami csak a kölcsönözhető könyveket írja ki.

Adj hozzá egy új könyvet a tömbhöz, és futtasd újra az összesítő függvényt.

Írj egy keresKonyvCimAlapjan(cim) függvényt, amely visszaadja a keresett könyvet, ha megtalálja.

Írj egy kikolcsonoz(cim) függvényt, amely beállítja kolcsonzheto = false, ha megtalálta a könyvet.
 */

const konyvtar = [
    {
        cim: "Egri csillagok",
        szerzo: "Gárdonyi Géza",
        ev: 1901,
        kolcsonzheto: true
    },
    {
        cim: "Tüskevár",
        szerzo: "Fekete István",
        ev: 1957,
        kolcsonzheto: false
    },
    {
        cim: "A Pál utcai fiúk",
        szerzo: "Molnár Ferenc",
        ev: 1907,
        kolcsonzheto: true
    }
];


function konyvekKiiratasa(tomb){
    console.log("A könyvtárban található könyvek:\n");

    for(let i = 0; i < tomb.length; i++){
        console.log(`\t${tomb[i].cim} - ${tomb[i].szerzo}`);
    }

    console.log('');
}

konyvekKiiratasa(konyvtar);


function kolcsonozhetoKonyvek(tomb){
    console.log("Az alábbi könyvek kölcsönözhetőek:\n");

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i].kolcsonzheto){
            console.log(`\t${tomb[i].cim}`);
        }
    }

    console.log('');
}

kolcsonozhetoKonyvek(konyvtar);


var ujKonyv = {
    cim: "Téli Berek",
    szerzo: "Fekete István",
    ev: 1960,
    kolcsonzheto: true
}

function konyvHozzaad(tomb, ujElem){
    tomb[tomb.length] = ujElem;
}

konyvHozzaad(konyvtar, ujKonyv);

konyvekKiiratasa(konyvtar);


var keresettCim = "Tüskevár"
function keresKonyvCimAlapjan(tulajdonsag){
    let i = 0;

    while(i < konyvtar.length && konyvtar[i].cim != tulajdonsag){
        i++;
    }

    if(i < konyvtar.length){
        return konyvtar[i];
    }
    else{
        return -1;
    }
}

var keres = keresKonyvCimAlapjan(keresettCim);

if(keres != -1){
    console.log(`A keresett könyv címe: ${keres.cim}\n`);
}
else{
    console.log('Nincs ilyen könyv.\n');
}

var kolcsonoz = "Téli Berek";
function kikolcsonoz(tomb, tulajdonsag){
    let i  = 0; 

    while(i < tomb.length && tomb[i].cim != tulajdonsag){
        i++;
    }

    if(i < tomb.length && tomb[i].kolcsonzheto){
        console.log(`A ${tomb[i].cim} című könyvet sikeresen kikölcsönözted.\n`);
        tomb[i].kolcsonzheto= false;
    }
    else{
        console.log('A keresett könyv nem kikölcsönözhető.\n');
    }
}

kikolcsonoz(konyvtar, kolcsonoz);

kolcsonozhetoKonyvek(konyvtar);