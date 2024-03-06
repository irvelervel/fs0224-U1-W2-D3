// CICLO FOR
// il ciclo FOR è una struttura in grado di ripetere una porzione di codice un numero anche elevato di volte
// la differenza con il ciclo WHILE è che il ciclo FOR non ammette indecisioni, ripete l'esecuzione del blocco
// esattamente il numero di volte prefissato.

// Come si compone un ciclo FOR?

// for(dichiarazione di variabile contatore; limite di valore per il contatore; incremento del contatore)
// for(let i = 0; i < 10; i++){
// qui dentro ci va il codice da ripetere
// quante volte questo blocco, con questa firma, verrà ripetuto? DIECI VOLTE
// }

for (let i = 0; i < 10; i++) {
  console.log('sono nel ciclo!', i) // 10 volte
}
