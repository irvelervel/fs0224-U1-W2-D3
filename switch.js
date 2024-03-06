// COSTRUTTO SWITCH
// Un costrutto switch non è altro che una versione "più elegante" di un if/else relativamente complesso
// Quando si trova un altro modo più elegante di scrivere una cosa che esiste già nel linguaggio -> SUGAR COATING

const firstName = 'Giovanni'

// proviamo a calcolare quante ore di studio mi servirebbero per passare l'esame all'università
let hoursOfIntenseStudy // all'inizio è undefined, ma nelle righe successive gli verrà assegnato un valore

// potremmo farlo con un if, else if, else...
// if (firstName === 'Stefano') {
//   hoursOfIntenseStudy = 40
// } else if (firstName === 'Giovanni') {
//   hoursOfIntenseStudy = 20
// } else if (firstName === 'Mario') {
//   hoursOfIntenseStudy = 0
// } else {
//   hoursOfIntenseStudy = 25
// }

// ...oppure potremmo farlo con uno SWITCH
switch (firstName) {
  case 'Stefano':
    hoursOfIntenseStudy = 40
    break

  case 'Giovanni':
    hoursOfIntenseStudy = 20
    break

  case 'Mario':
    console.log('Mario è un ragazzo che si impegna molto')
    hoursOfIntenseStudy = 0
    break

  // il default si mette di solito in fondo
  default:
    // Federico, Claudia, Marina, Cristian etc.
    hoursOfIntenseStudy = 25
}

console.log(
  "Per passare l'esame hai bisogno di " +
    hoursOfIntenseStudy +
    ' ore di studio.'
)
