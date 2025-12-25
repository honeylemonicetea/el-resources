// let alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let alphabet = [
  {
    letter:"a",
    color: "grey",
    transcription: "/eɪ/"
  },
  {
    letter:"b",
    color: "green",
    transcription: "/biː/"
  },
  {
    letter:"c",
    color: "green",
    transcription: "/siː/"
  },
  {
    letter:"d",
    color: "green",
    transcription: "/diː/"
  },
  {
    letter:"e",
    color: "green",
    transcription: "/iː/"
  },
  {
    letter:"f",
    color: "red",
    transcription: "/ɛf/"
  },
{
    letter:"g",
    color: "green",
    transcription: "/dʒiː/"
  },
{
    letter:"h",
    color: "grey",
    transcription: "/(h)eɪtʃ/"
  },
{
    letter:"i",
    color: "white",
    transcription: "/aɪ/"
  },
{
    letter:"j",
    color: "grey",
    transcription: "/dʒeɪ/"
  },
{
    letter:"k",
    color: "grey",
    transcription: "/keɪ/"
  },
{
    letter:"l",
    color: "red",
    transcription: "/ɛl/"
  },
{
    letter:"m",
    color: "red",
    transcription: "/ɛm/"
  },
{
    letter:"n",
    color: "red",
    transcription: "/ɛn/"
  },
{
    letter:"o",
    color: "yellow",
    transcription: "/oʊ/"
  },
{
    letter:"p",
    color: "green",
    transcription: "/piː/"
  },
{
    letter:"q",
    color: "blue",
    transcription: "/kjuː/"
  },
{
    letter:"r",
    color: "teal",
    transcription: "/ɑː(r)/"
  },
{
    letter:"s",
    color: "red",
    transcription: "/ɛs/"
  },
{
    letter:"t",
    color: "green",
    transcription: "/tiː/"
  },
{
    letter:"u",
    color: "blue",
    transcription: "/juː/"
  },
  
{
    letter:"v",
    color: "green",
    transcription: "/viː/"
  },
{
    letter:"w",
    color: "blue",
    transcription: "/ˈdʌbəl.juː/"
  },
{
    letter:"x",
    color: "red",
    transcription: "/ɛks/"
  },
  {
    letter:"y",
    color: "white",
    transcription: "/waɪ/"
  },
  {
    letter:"z",
    color: "red",
    transcription: "/zɛd/"
  },



]

// color the letters according to the textbook



let cards = []
let cardsContainer = document.querySelector(".letter-container");
alphabet.map((letter) => {
  let card = document.createElement("div");
  card.classList.add("card", letter.color);
  card.setAttribute("title", letter.transcription)
  let cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  cardBack.innerHTML = `
        <h1 class="card-word" title="${letter.transcription}">${letter.letter.toUpperCase()} ${letter.letter}</h1>
        
        <button onclick="playSound('${letter.letter}')"><img src="speaker.svg" width="30" height="30"></button>
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