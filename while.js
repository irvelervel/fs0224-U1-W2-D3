// CICLO WHILE
// Un ciclo, in generale, è una struttura di codice che ci permette di RI-ESEGUIRE una porzione di codice da noi definito
// un numero -definito- o -indefinito- di volte.

// il CICLO WHILE è forse il ciclo più famoso per la ripetizione di un numero di volte -indefinito- di un blocco di codice
// ad es. noi potremmo lanciare una moneta fino a che non esce testa; non sappiamo a priori di quanti tentativi avremo bisogno

// heads / tails
let coin
let attempts = 0

while (coin !== 'heads') {
  // inserire il codice qui, verrà ri-eseguito fino a che la condizione non diventerà FALSE
  // ri-esegui questo blocco di codice fino a che il risultato del lancio non è "heads"

  // attempts = attempts + 1
  attempts++ // incrementa il suo vecchio valore di 1

  const randomNumber = Math.random() // torna un valore "pseudo-casuale" tra 0 e 1
  // un valore compreso tra 0.00001 e 0.49999 vuol dire "testa" (heads)
  // un valore compreso tra 0.5 e 0.99999 vuol dire "croce" (tails)
  // console.log('numero estratto:', randomNumber)
  if (randomNumber < 0.5) {
    coin = 'heads' // testa
  } else {
    coin = 'tails' // croce
  }
  console.log('il risultato del lancio è', coin)
}

// se raggiungiamo questo punto, vuol dire che il lancio ha estratto "heads" (testa)
// mostriamo anche il numero di lanci che è stato necessario fare
console.log('finito! ci sono voluti ' + attempts + ' tentativi')

// Math.random() torna un numero tra 0 e 1 (0.0001 e 0.9999)
// se noi vogliamo un numero tra 0.0001 e 9.99999 -> Math.random() * 10
// se arrotondiamo per eccesso Math.random() * 10 -> Math.ceil(Math.random() * 10) -> intervallo 1-10

let counter = 0

while (counter <= 5) {
  console.log('il contatore vale meno di 5')
  // non c'è qui dentro nessuna istruzione che faccia diventare prima o poi 5 il valore di counter, in modo da fermare il ciclo
  // counter++ // counter = counter + 1 // counter += 1
  counter = counter + 2
}

// esce dal ciclo
console.log('counter ora vale', counter)
