// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// BONUS 1:

// Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
// Puoi usare varie tecniche (template literals, innerHTML, append, ecc)
// BONUS 2:

// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Come abbiamo visto puoi usare varie tecniche (style , className, classList).

let container = document.querySelector(".container-box");
let stringa = "";

for (let i = 1; i <= 100; i++) {
  stringa = i;
  let div = document.createElement("div");
  div.classList.add("box");

  if (i % 3 == 0 && i % 5 == 0) {
    stringa = "FizzBuzz";
    div.classList.add("quindici")
  } else if (i % 3 == 0) {
    stringa = "Fizz";
    div.classList.add("tre")
  } else if (i % 5 == 0) {
    stringa = "Buzz";
    div.classList.add("cinque")
  }

  console.log(stringa);
  div.innerText=stringa
  container.append(div);
}
