/*
🧠 1. Alap objektum létrehozása és elérése
Feladat:
Hozz létre egy auto nevű objektumot a következő tulajdonságokkal:

marka: "Toyota"

modell: "Corolla"

evjarat: 2018

indit() metódus, ami kiírja: "Az autó elindult."

✅ Írd ki külön sorokban az autó márkáját, évjáratát és hívd meg az indit() metódust!
 */

const auto = {
    marka: "Toyota",
    modell: "Corolla",
    evjarat: 2008,
    indit: function(){
        console.log('Az autó elindult.')
    }
}

console.log('Az autó márkája: ' + auto.marka + ' ' + auto.modell);
console.log('Évjárata: '+ auto.evjarat);

auto.indit();


