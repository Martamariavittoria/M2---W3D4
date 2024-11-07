// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

//✅ ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
//✅ ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
//✅ ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
//✅ ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
//✅ ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
//✅ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
//✅ ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

let bottone = false;

function cambiaTitolo() {
    if (bottone) {
        titolo.textContent = "Telefoni"
        bottone = false;
    }
    else {
        titolo.textContent = "Click&Call"
        bottone = true;
    }
}

// 💡 CAMBIA TITOLO METODO 2: 
/* function cambiaTitolo(){
    document.querySelector("h1").textContent = "Compra telefoni evviva"
} */

//querySelector cerca il primo elemento che corrisponde a una classe o un tag e fa quello che gli si dice nella funzione una volta che è stato selezionato. 
//Per farlo a tutti gli elementi si deve fare querySelectorAll e cambierebbe tutti gli <h1> presenti nella pagina. 



//✅ ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

let bottone1 = false;
let body = document.getElementById("corpo");

function cambiaSfondo() {
    if (bottone1) {
        body.style.backgroundColor = "#f9f9c1";
        bottone1 = false;
    }
    else {
        body.style.backgroundColor = "#ffffff";
        bottone1 = true;
    }

}

// 💡 let body = document.getElementById("corpo").style.backgroundColor = ffffcf


//✅ ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

let bottone2 = false;
let nuovoIndirizzo = document.getElementById("indirizzo");
function cambiaIndirizzo() {
    if (bottone2) {
        nuovoIndirizzo.innerText = "Click&Call - Via Bianchi 37 - Tel: 0183 654321 - email: click&call@gmail.com";
        bottone2 = false;
    }
    else {
        nuovoIndirizzo.innerText = "Il mio negozio - Via il mio negozio - Tel: 0183 123456 - email: ilmionegozio";
        bottone2 = true;
    }

}


//✅ ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella


let bottone3 = false;
let linkAmazon = document.getElementsByClassName("link");

function cambiaClasse() {
    if (bottone3) {
        for (let i = 0; i < linkAmazon.length; i++) {
            linkAmazon[i].classList.add("nuovolink");
        }
        bottone3 = false;
    } else {
        for (let i = 0; i < linkAmazon.length; i++) {
            linkAmazon[i].classList.remove("nuovolink");
        }
        bottone3 = true;
    }
}


//✅ ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

let cambiaImmagine1 = document.querySelectorAll(".immagine");
let bottone4 = false;
function cambiaImmagine() {
    if (bottone4) {

        for (let j = 0; j < cambiaImmagine1.length; j++) {
            cambiaImmagine1[j].classList.add("nuovaImmagine");
        }
        bottone4 = false;
    }
    else {
        for (let j = 0; j < cambiaImmagine1.length; j++) {
            cambiaImmagine1[j].classList.remove("nuovaImmagine");
        }
        bottone4 = true;
    }
}


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let bottone5 = false;

function cambiaColorePrezzo() {
    let elementiPrezzo = document.querySelectorAll(".ColorePrezzo");

    if (!bottone5) {
        for (let y = 0; y < elementiPrezzo.length; y++) {
            elementiPrezzo[y].style.color = getRandomColor();
        }
        bottone5 = true;
    } else {
        for (let y = 0; y < elementiPrezzo.length; y++) {
            elementiPrezzo[y].style.color = "black";
        }
        bottone5 = false;
    }
}

