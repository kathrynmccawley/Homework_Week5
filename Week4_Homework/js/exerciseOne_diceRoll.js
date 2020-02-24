//defining side variable
let sideNumber;
sideNumber = 12;
let diceSides;

//defininig object
const dice = {
  sides: sideNumber,
  roll: function() {
    return Math.ceil(Math.random() * this.sides);
  }
};

console.log(dice.roll());

//Putting into function - showed my work through process with the other part
function Dice(diceSides) {
  const dice = {
    sides: diceSides,
    roll: function() {
      return Math.ceil(Math.random() * this.sides);
    }
  };
  return dice;
}

//test

console.log(Dice(12).roll());
