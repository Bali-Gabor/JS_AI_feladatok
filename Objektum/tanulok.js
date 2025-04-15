/*
1. Összegzés (Summing)
Készíts egy tömböt diák objektumokkal, ahol minden diák nev és pontszam tulajdonságokkal rendelkezik. Számold ki az összes pontszám összegét!

2. Maximum kiválasztás
Ugyanebben a tömbben keresd meg azt a diákot, aki a legmagasabb pontszámot érte el!

3. Eldöntés (van-e olyan?)
Van-e a diákok között olyan, akinek a pontszáma kevesebb mint 50?

4. Megszámolás
Hány diák ért el legalább 80 pontot?

5. Minimum kiválasztás
Melyik diák kapta a legkevesebb pontot?

6. Keresés (index vagy név alapján)
Mi a neve annak a diáknak, akinek 92 pontja van?

7. Kiválasztás (biztos van ilyen)
Add vissza annak a diáknak az objektumát, aki pontosan 85 pontot szerzett!

8. Kiválogatás
Válogasd ki egy új tömbbe azokat a diákokat, akik 90 fölötti pontot értek el!

9. Átlagolás
Számold ki a pontszámok átlagát!

10. Szétválogatás
Két külön tömbbe válogasd szét a diákokat aszerint, hogy elértek-e legalább 60 pontot.

11. Unió
Két különböző osztály diákjait (két tömb) egyesítsd úgy, hogy ne legyenek ismétlődő nevek.

12. Metszet
Mely diákok szerepelnek mindkét osztályban (név alapján)?

13. Különbség
Listázd ki azokat a diákokat, akik az egyik osztályban szerepelnek, de a másikban nem.
 */

//-----------------------------Függvények----------------------------------

function osszpontszam(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i].pontszam;
    }

    return sum;
}


function maximum(tomb){
    let max = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i].pontszam > tomb[max].pontszam){
            max = i;
        }
    }
    return max;
}


function eldontes(tomb){
    let i = 0;
    let van = false;

    while(i < tomb.length && tomb[i].pontszam >= 50){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}


function megszamlalas(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i].pontszam >= 80){
            darab ++;
        }
    }
    return darab;
}


function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i].pontszam < tomb[min].pontszam){
            min = i;
        }   
    }
    return min;
}


function kereses(tomb, tulajdonsag){
    let i = 0;
    let index = 0;

    while(i < tomb.length && tomb[i].pontszam != tulajdonsag){
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


function kivalasztas(tomb, tulajdonsag){
    let i = 0;

    while(i < tomb.length && tomb[i].pontszam != tulajdonsag){
        i ++;
    }

    return i;
}


function kivalogatas(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i].pontszam > 90){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}


function atlag(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i].pontszam;
    }

    return sum / tomb.length;
}


function szetvalogat(tomb, tomb_tobb, tomb_kevesebb){
    let szamlalo_t = 0;
    let szamlalo_k = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i].pontszam >= 60){
            tomb_tobb[szamlalo_t] = tomb[i];
            szamlalo_t ++;
        }
        else{
            tomb_kevesebb[szamlalo_k] = tomb[i];
            szamlalo_k ++;
        }
    }
}


function unio(tomb, tomb2, unio_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){
        unio_tomb[szamlalo] = tomb[i];
        szamlalo ++;
    }

    for(let j = 0; j < tomb2.length; j ++){
        let van = false;

        for(let k = 0; k < szamlalo; k ++){

            if(unio_tomb[k].nev == tomb2[j].nev){
                van = true;
                break;
            }
        }
        if(van != true){
            unio_tomb[szamlalo] = tomb2[j];
            szamlalo ++;
        }
    }
}


function metszet(tomb, tomb2, metszet_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){
        let van = false; 

        for(let j = 0; j < tomb2.length; j ++){
                        
            if(tomb[i].nev == tomb2[j].nev){

                for(let k = 0; k < szamlalo; k ++){
                    
                    if(metszet_tomb[k].nev == tomb[i].nev){
                        van = true;
                    }
                }
                if(van != true){
                    metszet_tomb[szamlalo] = tomb2[j];
                    szamlalo ++;
                }
            }
        }
    }
}


function kulonbseg(tomb, tomb2, kulonbseg_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){
        let van = false;

        for(let j = 0; j < tomb2.length; j ++){

            if(tomb[i].nev == tomb2[j].nev){
                van = true;
                break;
            }
        }
        if(van != true){
            kulonbseg_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }

    for(let i = 0; i < tomb2.length; i ++){
        let van = false;

        for(let j = 0; j < tomb.length; j ++){

            if(tomb2[i].nev == tomb[j].nev){
                van = true;
                break;
            }
        }
        if(van != true){
            kulonbseg_tomb[szamlalo] = tomb2[i];
            szamlalo ++;
        }
    }
}

//--------------------------Megoldás---------------------------

var diakok = [
    {nev: "Anna", pontszam: 78},
    {nev: "Ádám", pontszam: 56},
    {nev: "Gábor", pontszam: 35},
    {nev: "Mónika", pontszam: 92},
    {nev: "László", pontszam: 88},
    {nev: "Zoltán", pontszam: 97},
    {nev: "Péter", pontszam: 37},
    {nev: "Imre", pontszam: 73},
    {nev: "Adrienn", pontszam: 67},
    {nev: "József", pontszam: 85}
];

var diakok2 = [
    {nev: "Anna", pontszam: 78},
    {nev: "Álmos", pontszam: 66},
    {nev: "Gábor", pontszam: 35},
    {nev: "Milán", pontszam: 52},
    {nev: "László", pontszam: 88},
    {nev: "Zalán", pontszam: 57},
    {nev: "Péter", pontszam: 37},
    {nev: "Ibolya", pontszam: 93},
    {nev: "Adrienn", pontszam: 67},
    {nev: "János", pontszam: 45}
];

// 1. feladat:
console.log('A diákok összpontszáma: ' + osszpontszam(diakok));

// 2. feladat:
console.log('A legmagasabb pontszámot elérő diák neve: ' + diakok[maximum(diakok)].nev);

// 3. feladat:
if(eldontes(diakok)){
    console.log('Van olyan diák, akinek kevesebb 50-nél a pontszáma.')
}   
else{
    console.log('Nincs olyan diák, akinek kevesebb pontja lenne 50-nél.')
}

// 4. feladat:
console.log('Legalább 80-van pontot elért diákok száma: ' + megszamlalas(diakok) + ' fő');

// 5. feladat:
console.log('A legkevesebb pontot elérő diák neve: ' + diakok[minimum(diakok)].nev);

// 6. feladat:
var keresett_pontszam = 92;
var ker = kereses(diakok, keresett_pontszam)
if(ker >= 0){
    console.log('92 pontot elért diák neve: ' + diakok[ker].nev);
}
else{
    console.log('Nincs pontosan 92 pontot elért diák');
}

// 7. feladat:
var pontos = 85;
var adat = kivalasztas(diakok, pontos)
console.log('A következő diák ért el pontosan 85 pontot:\n\tnév: ' + diakok[adat].nev + '\n\tpontja: ' + diakok[adat].pontszam);

// 8. feladat:
var diakok_90_folott = [];
kivalogatas(diakok, diakok_90_folott);
console.log('A következő diákok teljesítettek 90 pon felett:')
for(let i = 0; i < diakok_90_folott.length; i ++){
    console.log('\tnév: ' + diakok_90_folott[i].nev + '\tpontszám: ' + diakok_90_folott[i].pontszam);
}

// 9. feladat:
console.log('A diákok átlag pontszáma: ' + atlag(diakok));

// 10. feladat:
var tobb_mint60 = [];
var kevesebb_mint60 = [];
szetvalogat(diakok, tobb_mint60, kevesebb_mint60);
console.log('Legalább 60 pontot elérő diákok:');
for(let i = 0; i < tobb_mint60.length; i ++){
    console.log('\t' + tobb_mint60[i].nev)
}
console.log('Legalább 60 pontot el nem érő diákok:');
for(let i = 0; i < kevesebb_mint60.length; i ++){
    console.log('\t' + kevesebb_mint60[i].nev)
}

// 11. feladat:
var diakok_unio = [];
unio(diakok, diakok2, diakok_unio);
console.log('A U B =');
for(let i = 0; i < diakok_unio.length; i ++){
    console.log('\t' + diakok_unio[i].nev);
}

// 12. feladat:
var diakok_metszet = [];
metszet(diakok, diakok2, diakok_metszet);
console.log('A ∩ B =');
for(let i = 0; i < diakok_metszet.length; i ++){
    console.log('\t' + diakok_metszet[i].nev);
}

// 13. feladat:
var diakok_kulonbseg = []
kulonbseg(diakok, diakok2, diakok_kulonbseg);
console.log('A / B =');
for(let i = 0; i < diakok_kulonbseg.length; i ++){
    console.log('\t' + diakok_kulonbseg[i].nev);
}