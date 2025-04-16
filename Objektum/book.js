/*
🧠 Feladat: "Könyvtár Katalógus"
Készíts egy JavaScript objektumot, ami egy könyvet reprezentál! Az objektum neve legyen book.

Követelmények:
📚 Tulajdonságok:
title – a könyv címe (string)

author – szerző (string)

year – kiadás éve (number)

isAvailable – elérhető-e a könyv (boolean)

🛠️ Metódusok:
borrow() – ha a könyv elérhető, akkor állítsa az isAvailable értékét false-ra, és írja ki: "A könyvet kikölcsönözték.", különben írja ki: "A könyv nem elérhető."

returnBook() – állítsa vissza az isAvailable értékét true-ra, és írja ki: "A könyvet visszahozták a könyvtárba."
*/

const book = {
    title: "Egri Csillagok",
    author: "Gárdonyi Géza",
    year: 1899,
    isAvailable: true,

    borrow: function(){
        if(this.isAvailable){
            this.isAvailable = false;
            console.log('A könyvet kikölcsönözték.');
        }
        else{
            console.log('A könyv nem elérhető.');
        }
    },

    returnBook: function(){
        this.isAvailable = true;
        console.log('A könyvet visszahozták a könyvtárba.');
    }
};

book.borrow();
book.borrow();
book.returnBook();
book.borrow();
