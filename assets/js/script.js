/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questi commenti.
- Pattern fondamentale: stato -> render() -> eventi.
  Tutto cio' che vedi a schermo dipende dallo stato.
  Gli eventi modificano lo stato e poi chiamano render().
- Apri index.html nel browser. Apri la console (DevTools) per gli errori.
- Niente AI per generare codice. Niente template scaricati.
*/


/* STATO
   In cima al file definisci poche variabili globali:
   - un array di oggetti come dato principale (es. libri, ricette, film, ...)
   - una variabile per il filtro corrente
   - una variabile per l'ordinamento corrente
   - una variabile per la stringa di ricerca corrente
*/

let film = [
  { id: 1, titolo: "Inception", regista: "Christopher Nolan", voto: 5 },
  { id: 2, titolo: "Il Padrino", regista: "Francis Ford Coppola", voto: 5 },
  { id: 3, titolo: "Shrek", regista: "Andrew Adamson", voto: 3 }
];
let ricerca = "";

const form = document.getElementById("form-film");
const inputTitolo = document.getElementById("titolo");
const inputRegista = document.getElementById("regista");
const inputVoto = document.getElementById("voto");
const paragrafoErrore = document.getElementById("errore");
const inputRicerca = document.getElementById("ricerca");
const lista = document.getElementById("lista");
const btnTema = document.getElementById("btn-tema");
const statTotale = document.getElementById("stat-totale");
const statMedia = document.getElementById("stat-media");
const statPercentuale = document.getElementById("stat-percentuale");
const barraPiene = document.getElementById("barra-piene");



/* RENDER()
   Una sola funzione che ridipinge la lista. A ogni chiamata:
   1) parte dall'array completo,
   2) filtra,
   3) ordina,
   4) svuota il container DOM,
   5) ricrea gli elementi DOM per gli oggetti risultanti.
   Aggiorna anche conteggi e statistiche.
   Salva lo stato in localStorage in fondo a render() (cerca tu come funziona).
*/

function render() {
  // parto dall'array completo e tengo solo i film che contengono il testo cercato
  const testoCercato = ricerca.toLowerCase();
  const visibili = film.filter(function (f) {
    return (
      f.titolo.toLowerCase().includes(testoCercato) ||
      f.regista.toLowerCase().includes(testoCercato)
    );
  });

  // svuoto il container e ricreo una card per ogni film
  lista.innerHTML = "";

  if (visibili.length === 0) {
    const vuoto = document.createElement("p");
    vuoto.classList.add("vuoto");
    vuoto.textContent = "Nessun film trovato.";
    lista.appendChild(vuoto);
  }

  visibili.forEach(function (f) {
    const card = document.createElement("div");
    card.classList.add("card");

    const titolo = document.createElement("h3");
    titolo.textContent = f.titolo;

    const regista = document.createElement("p");
    regista.classList.add("regista");
    regista.textContent = f.regista;

    const voto = document.createElement("p");
    voto.classList.add("voto");
    voto.textContent = "★".repeat(f.voto) + " (" + f.voto + "/5)";

    const azioni = document.createElement("div");
    azioni.classList.add("azioni");

    const btnModifica = document.createElement("button");
    btnModifica.textContent = "Modifica";
    btnModifica.setAttribute("data-azione", "modifica");
    btnModifica.setAttribute("data-id", f.id);

    const btnElimina = document.createElement("button");
    btnElimina.textContent = "Elimina";
    btnElimina.setAttribute("data-azione", "elimina");
    btnElimina.setAttribute("data-id", f.id);

    azioni.appendChild(btnModifica);
    azioni.appendChild(btnElimina);
    card.appendChild(titolo);
    card.appendChild(regista);
    card.appendChild(voto);
    card.appendChild(azioni);
    lista.appendChild(card);
  });

  localStorage.setItem("film", JSON.stringify(film));
}



/* FORM CON VALIDAZIONE
   addEventListener("submit") sul form.
   event.preventDefault().
   Leggi i valori con .value.trim().
   Se uno dei campi obbligatori e' vuoto, mostra errore e return.
   Altrimenti push allo stato, form.reset(), render().
   Id univoco con Date.now().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* INTERAZIONI BASE — eliminare, modificare, contare
   - Elimina: filter per id, render(). Event delegation sul container.
   - Modifica in-place: button "Modifica". Al click il testo diventa <input>,
     si conferma con Invio o blur.
   - Conteggi dinamici dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RICERCA, FILTRO, ORDINAMENTO
   - Ricerca live: <input> con event "input". Salva in stato e render().
   - Filtro: <select> con event "change". Salva in stato e render().
   - Ordinamento: due button (o select). Salva in stato e render().
   I tre si compongono dentro render() in fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* NOTIFICHE TEMPORANEE
   Funzione notifica(testo) che imposta il testo del <div id="notifica">,
   lo mostra (display: block), poi dopo 3000ms (setTimeout) lo nasconde.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* TEMA CHIARO/SCURO
   Un button che chiama document.body.classList.toggle("dark").
   In CSS scrivi le regole opposte (es. body.dark { background: #111; ... }).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* PERSISTENZA — localStorage (cerca tu su MDN)
   - In fondo a render(), salva lo stato:
       localStorage.setItem("dati", JSON.stringify(stato));
   - All'avvio, prima della prima render(), carica:
       const salvato = localStorage.getItem("dati");
       if (salvato) stato = JSON.parse(salvato);
*/

const salvato = localStorage.getItem("film");
if (salvato) {
  film = JSON.parse(salvato);
}



/* RIORDINO ↑ ↓
   Due button su ogni elemento. Click su ↑ scambia con il precedente nell'array,
   ↓ con il successivo. Event delegation. Poi render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* STATISTICHE GRAFICHE
   Almeno due indicatori: contatori grandi e/o barre orizzontali
   (<div> con width: X% in base al dato). Aggiorna dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* MULTI-VISTA — lista / card / tabella
   Una variabile globale "vista" che render() legge per decidere quale HTML
   produrre. Tre button cambiano "vista" e chiamano render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* CATEGORIE
   Aggiungi un campo categoria nello schema. Nel form un <select> per sceglierla.
   In render(), raggruppa con reduce in { categoria: [elementi] } e disegna un
   header per categoria con sotto la lista di quella categoria.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


render();
