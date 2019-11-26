console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

//let cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardsInPlay);

//let cardTwo = cards[1];
//cardsInPlay.push(cardTwo);
//console.log("User flipped" + cardsInPlay);

// if(cardsInPlay[0] === cardsInPlay[1]){
//   alert("You found a match!");
// } else {
//   alert("Sorry, try again.");
// }

let cards = ["queen","queen","king","king"];
let cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard(cardId){

  if(cardsInPlay.length === 2){
    checkForMatch();
  }

  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);
