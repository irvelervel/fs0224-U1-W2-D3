// esempio di carrello di e-commerce

const cart = [
  {
    productName: 'Galaxy S24 Ultra',
    price: 1299,
    qty: 1,
    color: 'sage',
    inStock: true,
    categories: ['technology', 'smartphone'],
    id: '2ced95a7-34be-4dd6-8f10-eaccd710f722',
  },
  {
    productName: 'iMac 21.5',
    price: 999,
    qty: 2,
    color: 'white',
    inStock: true,
    categories: ['technology', 'computer'],
    id: '179744ab-e98e-479f-b077-2aacf94493b0',
  },
  {
    productName: 'iPad',
    price: 499,
    qty: 1,
    color: 'spaceGray',
    inStock: false,
    categories: ['technology', 'tablet'],
    id: 'f031c9b8-d37f-4002-97fb-bb3a0625601d',
  },
  {
    productName: 'Surface Go 3',
    price: 599,
    qty: 1,
    color: 'silver',
    inStock: true,
    categories: ['technology', 'computer'],
    id: '8a98bf9b-4e35-4fc5-ab86-a45c834bcf4b',
  },
  {
    productName: 'Turntable 5 Pro Ultra',
    price: 1999,
    qty: 1,
    color: 'black',
    inStock: true,
    categories: ['music', 'vintage'],
    id: '1743deaf-f166-4b9a-b2b3-4361354cded6',
  },
]

// cicliamo l'array e stampiamo tutti i productName
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].productName)
}

const allTheColors = [] // vogliamo ottenere ["sage", "white", "spaceGray", "silver", "black"]
// inseriamo in allTheColors tutti i colori di tutti i prodotti
for (let i = 0; i < cart.length; i++) {
  allTheColors.push(cart[i].color) // il colore di ogni prodotto, uno alla volta
}
console.log('allTheColors', allTheColors)

// calcoliamo il totale da pagare per l'utente, controllando solo tra i prodotti in stock e tenendo conto
// delle quantità

let totalToPay = 0

for (let i = 0; i < cart.length; i++) {
  // ignoriamo prima di tutto il prodotto se la sua proprietà inStock è false
  if (cart[i].inStock) {
    // ora che abbiamo solo gli elementi disponibili, moltiplichiamo il loro prezzo per la quantità nel carrello
    // e la addizioniamo a totalToPay
    totalToPay = totalToPay + cart[i].price * cart[i].qty
  }
}

console.log('TOTALTOPAY', totalToPay) // 5895

// contiamo e mostriamo all'utente quanti prodotti sono disponibili e quanti no

let inStock = 0
let nonInStock = 0

for (let i = 0; i < cart.length; i++) {
  if (cart[i].inStock) {
    inStock++ // inStock = inStock + 1 // inStock = inStock += 1
  } else {
    // se finisco qua, il prodotto non è disponibile!
    nonInStock++ // nonInStock = nonInStock + 1 // nonInStock = nonInStock += 1
  }
}

console.log('ELEMENTI IN STOCK:', inStock)
console.log('ELEMENTI NON IN STOCK:', nonInStock)

// stampiamo in console solo la prima category di ogni prodotto
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].categories[0])
  // cart -> array
  // cart[i] -> oggetto
  // cart[i].categories -> array
  // cart[i].categories[0] -> stringa
}

// elenchiamo tutte le categorie disponibili

const allCategories = []

for (let i = 0; i < cart.length; i++) {
  for (let j = 0; j < cart[i].categories.length; j++) {
    allCategories.push(cart[i].categories[j])
  }
}

console.log(allCategories)

// filtriamo le categorie doppie

let filteredCategories = []

for (let i = 0; i < allCategories.length; i++) {
  if (!filteredCategories.includes(allCategories[i])) {
    filteredCategories.push(allCategories[i])
  }
}

console.log('FILTERED', filteredCategories)
