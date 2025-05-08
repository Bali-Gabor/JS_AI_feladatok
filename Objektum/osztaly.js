class Diak {
    constructor(nev, osztaly, jegyek = []){
        this.nev = nev;
        this.osztaly = osztaly;
        this.jegyek = jegyek;
    }

    legjobbJegy(){
        let max = 0;

        for(let i = 1; i < this.jegyek.length; i++){

            if(this.jegyek[i] > this.jegyek[max]){
                max = i;
            }
        }
        console.log(`A diák legjobb osztályzata: ${this.jegyek[max]}`);
    }

    ujJegy(jegy){
        this.jegyek[this.jegyek.length] = jegy;
    }

    atlag(){
        let osszeg = 0;

        for(let i = 0; i < this.jegyek.length; i++){
            osszeg += this.jegyek[i];
        }
        console.log(`A diák átlaga ${(osszeg / this.jegyek.length).toFixed(2)}`);
    }
}


function osztalyzatok(){
    let jegy = [];

    for(let i = 0; i < 5; i++){
        jegy[i] = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    }

    return jegy;
}

const Anna = new Diak("Rozika", "3/a", osztalyzatok());
const Adam = new Diak("Lütyő", "6/b", osztalyzatok());

console.log(`Név:\t\t ${Anna.nev}`);
console.log(`Osztály:\t ${Anna.osztaly}`);
console.log(`Osztályzatok:\t ${Anna.jegyek}`);
console.log('');
Anna.atlag();
Anna.legjobbJegy();
Anna.ujJegy(5);
Anna.atlag();
console.log('');
console.log(`Név:\t\t ${Adam.nev}`);
console.log(`Osztály:\t ${Adam.osztaly}`);
console.log(`Osztályzatok:\t ${Adam.jegyek}`);
console.log('');
Adam.atlag();
Adam.legjobbJegy();
Adam.ujJegy(5);
Adam.atlag();

