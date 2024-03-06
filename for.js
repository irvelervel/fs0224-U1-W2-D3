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

// poichè la variabile contatore i spesso si fa partire da 0...
// ...ecco che si rivela un ottimo strumento per andare a esplorare il contenuto degli ARRAY

const arrayOfNames = [
  'jacopo', // 0
  'kassandra', // 1
  'lorenza', // 2
  'lorenzo', // 3
  'luca', // 4
  'marco', // 5
]

// il primo elemento di un array avrà sempre indice 0
// l'ultimo elemento di un array avrà sempre indice length - 1

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(i)
  console.log(arrayOfNames[i].toUpperCase()) // arrayOfNames[i] è UNO degli elementi dell'array, quindi una stringa!
  // i vale 0 al primo ciclo
  // i vale 1 al secondo ciclo
  // i vale 2 al terzo ciclo
  // i vale 3 al quarto ciclo
  // i vale 4 al quinto ciclo
  // i vale 5 al sesto ciclo
  // con i che vale 6 si esce dal ciclo
}

const arrayOfNumbers = [45, 2, 98, 123, 32, 9, 36, 1]

// calcoliamone la somma
let total = 0 // 45, 47, etc.

for (let i = 0; i < arrayOfNumbers.length; i++) {
  console.log('dentro il ciclo for per arrayOfNumbers, i vale', i)
  console.log(
    'il valore preso attualmente in considerazione è',
    arrayOfNumbers[i]
  )
  total = total + arrayOfNumbers[i] // stessa cosa di fare -> total += arrayOfNumbers[i]
}

console.log('FINITO IL CICLO TOTAL VALE', total)
