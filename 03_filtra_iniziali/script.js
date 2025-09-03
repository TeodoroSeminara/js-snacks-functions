/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const scegliLettera= prompt("Inserisci l'iniziale dei nome che cerchi").toUpperCase();

// Dichiara la funzione qui.

function firstLetter (array, lettera){

    let newArray = [];
    let primaLetteraNome = "";
    let indiceArray = "";

    for (i=0; i<array.length; i++){

        indiceArray = array[i];
        primaLetteraNome = indiceArray[0];

        if (lettera === primaLetteraNome){

            newArray.push(indiceArray);

        }

    }

    return newArray
}


// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter(names, scegliLettera));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]