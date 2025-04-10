var szamok = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -12, 13, 14, 15, 16, 17, 18, 19, 20);

//kiválogatás tétele

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

kivalogat(szamok, paros_szamok);

console.log('A tömb páros elemei: ' + paros_szamok);


//Minimum kiválastás tétele

function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('A tömb legkisebb elemének indexe: ' + minimum(szamok) + ' értéke: ' + szamok[minimum(szamok)]);


//Kiválasztás tétele

var keres = 14;

function kivalaszt(tomb, tulajdonsag){
    let i = 0;

    while(tomb[i] != tulajdonsag){
        i ++;
    }
    return i;
}

console.log('A keresett szám indexe: ' + kivalaszt(szamok, keres));


//Keresés tétele

var keres = 34;

function kereses(tomb, tulajdonsag){
    let i = 0;
    let szamlalo = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        szamlalo = i;
    }
    else{
        szamlalo = -1;
    }

    return szamlalo;
}

console.log('A keresett érték szerepel a tömbben: ' + kereses(szamok, keres));


//Megszámlálás tétele

function megszamol(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 1){
            darab ++;
        }
    }
    return darab;
}

console.log('A tömbben található páratlan elemek száma: ' + megszamol(szamok));


//Eldöntés tétele

var keres = 18;

function eldontes(tomb, tulajdonsag){
    let van = false;
    let i = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

console.log('A keresett érték szerepel a tömbben: ' + eldontes(szamok, keres));


//Maximum kiválastás tétele

function maximum(tomb){
    let max = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }
    return max;
}

console.log('A tömb legnagyobb elemének indexe: ' + maximum(szamok) + ', értéke: ' + szamok[maximum(szamok)]);


//Összegzés tétele

function osszegzes(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }

    return sum;
}

console.log('A tömb elemeinek összege: ' + osszegzes(szamok));