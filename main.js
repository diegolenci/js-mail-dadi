/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email */

//elenco mail e richiesta a utente
const email = [
    "paperinogmail.com",
    "pippogmail.com",
    "topolinogmail.com"
]

let richiesta = prompt ("inserisci la tua mail")
let emailTrovata = false

for (let i=0; i < email.length; i++ ){
    let singoloElemento = email[i];

    if( singoloElemento === richiesta){
        emailTrovata = true
    }
}

if ( emailTrovata === true){
    console.log(`${richiesta} puoi accedere`)
} else {
    console.log("peccato non sei in lista")
}



/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//variabili con numeri random
let number1 = Math.floor(Math.random() * 6)
let number2 = Math.floor(Math.random() * 6)

console.log (number1 , number2)

//condizioni
if ( number1 > number2){
    console.log (`${number1} ha vinto il giocatore`)
} else if ( number1 < number2){
    console.log (`${number2} ha vinto il computer`)
} else {
    console.log (`${number1} ${number2} pareggio`)
}

