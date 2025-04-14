/*
🔍 2. Objektum tömb kezelése
Feladat:
Hozz létre egy termekek nevű tömböt, amely 5 darab objektumot tartalmaz. Minden objektumnak legyen:

nev

ar

akcios (logikai érték)

✅ Írd ki az összes terméket, amelyek akcios === true.
*/

var termekek = [
{nev: "Sportszelet", ar: 315, akcios: false},
{nev: "Twix", ar: 499, akcios: false},
{nev: "Mars", ar: 547, akcios: true},
{nev: "Snickers", ar: 600, akcios: false},
{nev: "Balaton", ar: 419, akcios: true}
];

console.log('Az alábbi termékek akciósak:\n')

for(let i = 0; i < termekek.length; i ++){

    if(termekek[i].akcios == true){
        console.log('\tA termék neve: ' + termekek[i].nev + '\t ára: ' + termekek[i].ar + 'Ft');
    }
}