/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.2762 € al km)
va applicato uno sconto del 17.5% per i minorenni
va applicato uno sconto del 33.3% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina, sempre rispettando le due cifre decimali.
*/

const inputKilometers = (document.getElementById('km'));
const inputUserAge = (document.getElementById('age'));
console.log(inputKilometers, inputUserAge);

const inputButton = (document.getElementById('button'));
console.log(inputButton);


inputButton.addEventListener('click', function(){

    let ticketPrice = 0.2762 * inputKilometers.value;
    console.log(ticketPrice);

    const minorDiscount = 17.5 / 100 * ticketPrice;
    const over65Discount = 33.3 / 100 * ticketPrice;
    console.log(minorDiscount, over65Discount);

    if (inputUserAge < 18){
        ticketPrice = ticketPrice - minorDiscount;
    }

    else if (inputUserAge >= 65){
        ticketPrice = ticketPrice - over65Discount;
    }

    document.getElementById('ticket').innerHTML = "Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2) + "&euro;";
    console.log(ticketPrice.toFixed(2));
});








