var szamok = [13, 43, 76, 22, 18, 99, 34, 5, -45, 7, -64, 49, -94, 65, -16];

// Rendezés tétele

/* 
   Rendezés(X[N]) 

     for i = 1-től N-1-ig 

         for j = i+1-től N-ig 

             Ha X[i] > X[j] akkor 

                 Csere X[i] és X[j]

             Ciklus vége;

         Ciklus vége;

   Eljárás vége;
*/

function rendezes(tomb){
    let csere = 0;

    for(let i = 0; i < tomb.length - 1; i ++){

        for(let j = i + 1; j < tomb.length; j ++){
            
            if(tomb[i] > tomb[j]){
                csere = tomb[i];
                tomb[i] = tomb[j];
                tomb[j] = csere;
            }
        }
    }
}

rendezes(szamok);
console.log('A rendezett tömb: ' + szamok.join(', '));


//Szétválogatás tétele

/*
    Szétválogatás(X[N], paros_tomb, paratlan_tomb)

        for i = 0-tól N-1-ig: Ciklus a tömb elemein

            Ha X[i] % 2 == 0, akkor:

                Add hozzá X[i]-t a paros_tomb-hoz.

            Ellenkező esetben:

                Add hozzá X[i]-t a paratlan_tomb-hoz.

        Ciklus vége:

    Eljárás vége:
*/

var paros = [];
var paratlan = [];

function szetvalogat(tomb, paros_tomb, paratlan_tomb){
    let paros_szamlalo = 0;
    let paratlan_szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            paros_tomb[paros_szamlalo] = tomb[i];
            paros_szamlalo ++;
        }
        else{
            paratlan_tomb[paratlan_szamlalo] = tomb[i];
            paratlan_szamlalo ++;
        }
    }
}

szetvalogat(szamok, paros, paratlan);
console.log('Páros tömb elemei: ' + paros.join(', '));
console.log('Páratlan tömb elemei: ' + paratlan.join(', '));


//Unió tétele

/*
Unió(A[N], B[M], C)

// Első tömb elemeinek másolása az eredmény tömbbe
    for i = 0-tól N-1-ig
        C-hez hozzáad A[i]
    ciklus vége

// Második tömb elemeinek bejárása
    for j = 0-tól M-1-ig
        van = false

// Megnézzük, hogy B[j] benne van-e már C-ben
        for k = 0-tól C hossz -1-ig
            ha C[k] == B[j] akkor
                van = true
        ciklus vége

// Ha nem volt benne, hozzáadjuk C-hez
        ha van == false akkor
            C-hez hozzáad B[j]
    ciklus vége

Eljárás vége
*/

var a = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var b = new Array(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
var c = new Array();

function unio(a_tomb, b_tomb, unio_tomb){

    for(let i = 0; i < a_tomb.length; i ++){
        unio_tomb[i] = a_tomb[i];
    }

    for(let j = 0; j < b_tomb.length; j ++){
        let van = false;

        for(let k = 0; k < unio_tomb.length; k ++){
            
            if(unio_tomb[k] == b_tomb[j]){
                van = true;
                break;
            }
        }
        if(van != true){
            unio_tomb.push(b_tomb[j]);
        }
    }
}

unio(a, b, c);
console.log('A U B = ' + c)


//Metszet tétele

/*
Metszet(A[N], B[M], C)

    C_hossz = 0

    ciklus i = 0-tól N - 1-ig
        ciklus j = 0-tól M - 1-ig
            ha A[i] == B[j] akkor
                // Megnézzük, hogy még nincs-e benne C-ben
                van = false
                ciklus k = 0-tól C_hossz - 1-ig
                    ha C[k] == A[i] akkor
                        van = true
                ciklus vége

                ha van == false akkor
                    C[C_hossz] = A[i]
                    C_hossz = C_hossz + 1
        ciklus vége
    ciklus vége

Eljárás vége
*/

var a = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var b = new Array(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
var c = new Array();

function metszet(a_tomb, b_tomb, metszet_tomb){
    let szamlalo = 0;

    for(let i = 0; i < a_tomb.length; i ++){

        for(let j = 0; j < b_tomb.length; j ++){

            if(a_tomb[i] == b_tomb[j]){
                let van = false;

                for(let k = 0; k < metszet_tomb.length; k ++){

                    if(metszet_tomb[k] == a_tomb[i]){
                        van = true;
                        break;
                    }
                }
                if(van == false){
                    metszet_tomb[szamlalo] = a_tomb[i];
                    szamlalo ++;
                }
            }
        }
    }
}

metszet(a, b, c);
console.log('A ∩ B = ' + c);


// Különbség tétele

/*
Különbség(A[N], B[M], C)
    C ← üres tömb
    ciklus i = 0-tól N-1-ig
        ha A[i] nincs benne B-ben akkor
            C-hez hozzáad A[i]-et
    ciklus vége
Eljárás vége
*/

var a = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var b = new Array(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
var c = new Array();

function kulonbseg(a_tomb, b_tomb, kulonbseg_tomb){
    let szamlalo = 0;
    
    for(let i = 0; i < a_tomb.length; i ++){
        let van = false;

        for(let j = 0; j < b_tomb.length; j ++){

            if(a_tomb[i] == b_tomb[j]){
                van = true;
                break;
            }
        }
        if(van != true){
            kulonbseg_tomb[szamlalo] = a_tomb[i];
            szamlalo++;
        }
    }
}

kulonbseg(a, b, c);
console.log('A / B = ' + c);
var c = new Array();
kulonbseg(b, a, c);
console.log('B / A = ' + c)