/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function cercaVocali(parola) {
    let letteraParola = 0;
    let vocale = ["a", "e", "i", "o", "u"];
    for (i = 0; i < parola.length; i++) {

        for (j = 0; j < vocale.length; j++) {

            if (parola[i] === vocale[j]) {
                letteraParola++;
            }
        }
    }

    return letteraParola

}


// Invoca la funzione qui e stampa il risultato in console

console.log(cercaVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)