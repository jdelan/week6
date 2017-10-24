//
// CARDS
//

let dealCards = function() {
  let deck = shuffledDeckOfCards();

  // Solution 1:
  let cards_html = ""
  for (let i = 1; i <= 5; ++i) {
    let nextCard = deck[i - 1]
    let new_img_src = "images/cards/" + nextCard.face + "_of_" + nextCard.suit + ".png"
    let image_tag = "<img width=\"200\" src=\"" + new_img_src + "\">";
    cards_html = cards_html + image_tag
  }
  let cards_div = document.getElementById("cards");
  cards_div.innerHTML = cards_html;

  // Solution 2:
  // let card_images = document.getElementById("cards").getElementsByTagName("img");
  // for (let i = 1; i <= 5; ++i) {
  //   let nextCard = deck[i - 1]
  //   let new_img_src = "images/cards/" + nextCard.face + "_of_" + nextCard.suit + ".png"
  //   card_images[i - 1].src = new_img_src;
  // }

  // Solution 3:
  // let card_images = document.getElementById("cards").getElementsByTagName("img");
  // for (card_image of card_images) {
  //   let nextCard = deck.shift()
  //   let new_img_src = "images/cards/" + nextCard.face + "_of_" + nextCard.suit + ".png"
  //   card_image.src = new_img_src;
  // }

  // Solution 4:
  // let card_images = document.querySelectorAll("#cards img");
  // for (card_image of card_images) {
  //   let nextCard = deck.shift()
  //   let new_img_src = "images/cards/" + nextCard.face + "_of_" + nextCard.suit + ".png"
  //   card_image.src = new_img_src;
  // }
}


// Here is a function that returns an array of objects to
// represent a shuffled deck of cards.
let shuffledDeckOfCards = function() {
  // create a sorted deck of cards
  let faces = [ 'ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']

  let deck = [];
  for (let x = 0; x < faces.length; x++) {
    for (let y = 0; y < suits.length; y++) {
      deck.push({ face: faces[x], suit: suits[y]});
    };
  };

  // now, shuffle the deck
  let currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

let cardsLink = document.getElementById("deal_cards")
cardsLink.addEventListener("click", dealCards);
