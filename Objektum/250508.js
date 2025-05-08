/**
Feladatleírás:
Készíts egy Diak nevű objektumot (vagy osztályt), amely:

tárolja a diák nevét,

tárol egy tömböt a jegyeiről,

rendelkezik metódusokkal:

új jegy hozzáadása,

átlag számítása,

legjobb jegy visszaadása.
 */

const Diak = {
    nev: "Minta Béla",
    jegyek: [4,2,2,3,3,1,3,3,4,3],
    ujJegy(jegy){
        this.jegyek[this.jegyek.length] = jegy;
    },
    atlag(){
        let osszeg = 0;

        for(let i = 1; i< this.jegyek.length; i++){
            osszeg += this.jegyek[i];
        }
        return (osszeg / this.jegyek.length).toFixed(2);
    },
    legjobbJegy(){
        let max = 0;

        for(let i = 0; i < this.jegyek.length; i++){

            if(this.jegyek[i] > this.jegyek[max]){
                max = i;
            }
        }
        return this.jegyek[max];
    },
    legtobbszorSzereploJegy(){
        const legtobb = {};

        for(let i = 0; i < this.jegyek.length; i++){
            const jegy = this.jegyek[i];
            if(legtobb[jegy]){
                legtobb[jegy]++;
            }
            else{
                legtobb[jegy] = 1;
            }
        }
        let maxJegy = null;
        let maxDb = 0;

        for(let jegy in legtobb){

            if(legtobb[jegy] > maxDb){
                maxDb = legtobb[jegy];
                maxJegy = jegy;
            }
        }
        console.log(`A legtöbbet előforduló jegy: ${maxJegy} összesen ${maxDb}db -ot szerzett a tanuló.`);
    }
}

console.log(`A diák átlada: ${Diak.atlag()}`);
Diak.ujJegy(1);
console.log(`A legjobb érdemjegy: ${Diak.legjobbJegy()}`);
console.log(`A diák átlada: ${Diak.atlag()}`);
Diak.ujJegy(5);
console.log(`A legjobb érdemjegy: ${Diak.legjobbJegy()}`);
console.log(`A diák átlada: ${Diak.atlag()}`);
Diak.legtobbszorSzereploJegy();