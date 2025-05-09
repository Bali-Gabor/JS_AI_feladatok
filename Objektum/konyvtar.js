/**
 Készíts egy JavaScript programot, amely egy könyvtár könyveit kezeli objektumok segítségével. Minden könyvet egy objektum reprezentál a következő tulajdonságokkal:

cim (string)

szerzo (string)

ev (szám, kiadás éve)

kolcsonozve (boolean – true, ha ki van kölcsönözve)

Az összes könyvet egy tömbbe rendezd.

🧠 Feladatok:
Számlálás tétele: Írd meg, hogy hány könyv van összesen, és hány van ezek közül kikölcsönözve.

Keresés tétele: Írj függvényt, amely visszaadja egy megadott című könyv objektumát (pl. "Tüskevár").

Minimum kiválasztás tétele: Melyik a legrégebbi könyv a könyvtárban?

Szűrés: Készíts egy új tömböt, amely csak a szabad (nem kölcsönzött) könyveket tartalmazza.

Listázás: Írj függvényt, ami kiírja az összes könyv címét és szerzőjét egy szép listában.
 */

const konyvek = [
    { cim: "Egri csillagok", szerzo: "Gárdonyi Géza", ev: 1899, kolcsonozve: false },
    { cim: "Pál utcai fiúk", szerzo: "Molnár Ferenc", ev: 1907, kolcsonozve: true },
    { cim: "Tüskevár", szerzo: "Fekete István", ev: 1957, kolcsonozve: false },
    { cim: "A kőszívű ember fiai", szerzo: "Jókai Mór", ev: 1869, kolcsonozve: true }
];

// 1. feladat

function szamol(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i].kolcsonozve === true){
            darab++;
        }
    }
    return darab;
}

console.log(`A könyvtárban ${konyvek.length} db könyv található, ebből ${szamol(konyvek)} db van kikölcsönözve.\n`);


// 2. feladat

var keres = "Tüskevár";

function kereses(tomb, tulajdonsag){
    let i = 0;

    while(i < tomb.length && tomb[i].cim != tulajdonsag){
        i++;
    }

    if(i < tomb.length){
        return tomb[i];
    }
    else{
        return 0;
    }
}

var konyv = kereses(konyvek, keres);

if(konyv){
    console.log(`A keresett könyv címe: ${konyv.cim}\nszerzője: ${konyv.szerzo}\nkiadás éve: ${konyv.ev}\nKölcsonözhető: ${konyv.kolcsonozve}\n`);
}
else{
    console.log("Nincs ilyen könyv.\n");
}

 
// 3. feladat

function legregebbi(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i++){

        if(tomb[i].ev < tomb[min].ev){
            min = i;
        }
    }
    return min;
}

console.log(`A legrégebbi könyv: ${konyvek[legregebbi(konyvek)].cim}\n`);


// 4. feladat

var nemK = [];

function nemKolcsonzott(tomb, uj_tomb){
    let szamlalo;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i].kolcsonozve === false){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo++;
        }
    }
}

nemKolcsonzott(konyvek, nemK);


// 5. feladat

function kiir(tomb){
    console.log('Könyvek:');

    for(let i = 0; i < tomb.length; i++){
        console.log(`\t${tomb[i].szerzo} - ${tomb[i].cim}`);
    }
}

kiir(konyvek);