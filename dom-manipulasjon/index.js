// Setter referanser til elementene våre i egne variabler
const body = document.getElementsByTagName('body')[0]
const overskrift = document.getElementsByTagName('h1')[0];
const inp = document.getElementById('tallInput');
const handleliste = document.getElementById('handleliste')

//
//  Hente verdier
//

// innerText
const text = overskrift.innerText;
console.log(`Overskriften sier: "${text}"`);

// Verdier fra input
const number = inp.value;
console.log(`Verdien av input: ${number}`);


// Attributter
const type = inp.getAttribute('type');
console.log(`Input er av typen "${type}"`);


//
//  Sette verdier
//

// Endre stil

// body.style.textAlign = "center"
// overskrift.style.fontFamily = "consolas"
// handleliste.style.listStyle = "none";

// Endre text

// overskrift.innerText = "Ny overskrift!";

// Endre verdier

//inp.value = 69;

//
//  Endre strukturen!
//

// Lage nye elementer

// const newListElement = document.createElement('li');
// newListElement.innerText = 'Chips 🍟';

// Legge til elementer
// handleliste.appendChild(newListElement)