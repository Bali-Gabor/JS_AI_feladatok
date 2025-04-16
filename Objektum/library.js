const library = [
    {
        title: "Egri Csillagok",
        author: "Gárdonyi Géza",
        year: 1899,
        isAvailable: true,
        genre: "Történelmi regény",
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
    },
    {
        title: "Harry Potter és a bölcsek köve",
        author: "J.K. Rowling",
        year: 1997,
        isAvailable: true,
        genre: "Fantasy",
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
    },
    {
        title: "A Gyűrűk Ura: A két torony",
        author: "J.R.R. Tolkien",
        year: 1954,
        isAvailable: true,
        genre: "Fantasy",
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
    },
    {
        title: "Az utolsó mohikán",
        author: "James Fenimore Cooper",
        year: 1826,
        isAvailable: true,
        genre: "Kaland",
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
    },
    {
        title: "A szél árnyéka",
        author: "Carlos Ruiz Zafón",
        year: 2001,
        isAvailable: true,
        genre: "Misztikus regény",
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
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        isAvailable: true,
        genre: "Dystopia",
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
    },
    {
        title: "Alkonyat",
        author: "Stephenie Meyer",
        year: 2005,
        isAvailable: true,
        genre: "Romantikus",
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
    },
    {
        title: "A harcosok klubja",
        author: "Chuck Palahniuk",
        year: 1996,
        isAvailable: true,
        genre: "Szatíra",
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
    },
    {
        title: "A tizenharmadik történet",
        author: "Diane Setterfield",
        year: 2006,
        isAvailable: true,
        genre: "Gótikus regény",
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
    },
    {
        title: "A kis herceg",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        isAvailable: true,
        genre: "Filozófiai mese",
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
    }
];

/*
1. Feladat: Elérhető könyvek listázása
Feladat: Írj egy függvényt, amely kilistázza az összes elérhető könyvet a könyvtárban!
*/
function elerheto(){
console.log('AZ elérhető könyvek listája: \n');
    for(let i = 0; i < library.length; i ++){

        if(library[i].isAvailable === true){
            console.log('\t' +  library[i].title);
        }
    }
}

/*
2. Feladat: Könyv kikölcsönzése a cím alapján
Feladat: Készíts egy függvényt, amely a könyv címét kérve kikölcsönzi a könyvet (ha elérhető).
 */
function kolcsonzes(cim){
    let i = 0;

    while(library[i].title != cim){
        i ++;
    }
    if(library[i].isAvailable == true){
        library[i].borrow();
    }
    else{
        console.log('A könyv jelenleg nem elérhető, ki van kölcsönözve.');
    }
}
/*
3. Feladat: Könyvek visszahozatala
Feladat: Írj egy függvényt, amely visszahozza a könyvet a cím alapján, ha az kikölcsönözve van.
*/
function vissza(cim){
    let i = 0;

    while(library[i].title != cim){
        i ++;
    }

    if(library[i].isAvailable === false){
        library[i].isAvailable = true;
        console.log('A könyv visszavéve!');
    }
    else{
        console.log('A könyv nem is volt kikölcsönözve!');
    }
}
/*
4. Feladat: Könyv hozzáadása a könyvtárhoz
Feladat: Írj egy függvényt, amely egy új könyvet ad hozzá a könyvtárhoz! A függvény paraméterként kapja meg a könyv címét, szerzőjét, kiadási évét és elérhetőségét.
*/
function hozzaad(cim, szerzo, kiadas_eve, mufaj){
    let uj_konyv = {
        title: cim,
        author: szerzo,
        year: kiadas_eve,
        isAvailable: true,
        genre: mufaj,
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
    library[library.length] = uj_konyv;
}

elerheto();
kolcsonzes("1984");
hozzaad("A Pál utcai fiúk", "Molnár Ferenc", 1907, "Történelmi regény");
elerheto();
kolcsonzes("A Pál utcai fiúk");
vissza("1984");
elerheto();