// DICE

// Below, we will define a function named rollDice
// that will simulate the rolling of two dice.
//
// The goal is to construct a new HTML fragment with
// two <img> elements, once for each die, to replace
// the exiting HTML.
//
// We do this by initializing our new fragment to an
// empty string.  Then we use a loop that will execute
// exactly two times.  Each time through the loop:
//
// 1. We have the computer choose a random value
//    between 1 and 6.
//
// 2. We construct an new HTML <img> element
//    to represent the new die from the
//    images/dice folder.
//
// 3. We append the new die element to our HTML fragment.
//
// When the loop is over, our HTML fragment should
// contain enough HTML to display two <img> elements,
// once for each die.
//
// Finally, we replace the contents of the #dice element
// with our new images.

let favoriteNumber = 3 * 7

let rollDice = function(event) {
  // event.preventDefault();

  let dice_html = "";
  for (let i = 1; i <= 2; ++i) {
    let value = Math.floor(Math.random() * 6) + 1;
    let image_tag = "<img width=\"200\" src=\"images/dice/" + value + ".png\">";
    dice_html = dice_html + image_tag
  }

  let dice_div = document.getElementById("dice");
  dice_div.innerHTML = dice_html;
}

// Now, let's listen for click events on the "Roll Dice" link
// to trigger the rollDice function above:
let diceLink = document.getElementById("roll_dice")
diceLink.addEventListener("click", rollDice);
