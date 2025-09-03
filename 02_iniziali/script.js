/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetter (letter) {

    let newArray = [];
    let firstLetterArray ="";

    for (i=0; i<letter.length; i++){
        
        firstLetterArray=letter[i];
        newArray.push(firstLetterArray[0]);
    }

    return newArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


