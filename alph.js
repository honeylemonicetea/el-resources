let alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// color the letters according to the textbook



let cards = []
let cardsContainer = document.querySelector(".letter-container");
alphabet.map((letter) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  cardBack.innerHTML = `
        <h1 class="card-word">${letter.toUpperCase()} ${letter}</h1>
        
        <button onclick="playSound('${letter}')"><img src="speaker.svg" width="30" height="30"></button>
        `;
  let cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardFront.innerHTML = `<h1 class="card-word"></h1>`;
  card.appendChild(cardBack);
  card.appendChild(cardFront);
  cardsContainer.appendChild(card);
  card.addEventListener("click", toggleOpenCard);
  cards.push(card);
});


function playSound(letter){
    let audio = new Audio(`sounds/${letter}.mp3`)
    audio.play()
}

function toggleOpenCard(event) {
}