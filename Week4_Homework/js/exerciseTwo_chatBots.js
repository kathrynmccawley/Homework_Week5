let answer;

const chatBot = {
  "what are we having for dinner?": "veggie sausage and macaroni and cheese",
  "what's the main course?": "veggie Sausage",
  "what's the side dish?": "macaroni and cheese?",
  "at what time is dinner?": "7 o'clock",
  "is there anything I can do to help?": "please set the table",
  "where are the dishes?": "in the cupboard",
  "where are the silverware?": "in the drawer",
  "is this meal vegetarian?": "yes, it's a vegetarian meal",
  "why is there no meat": "because I said so goddamnit",
  "what cheese is in the macaroni and cheese":
    "cheddar, gouda, and blue cheese",
  "what are we having to drink?": "water and beer"
};

function checkAnswer() {
  answer = prompt("Ask a question about dinner!");
  let newAnswer = answer.toLowerCase();
  if (newAnswer in chatBot) {
    console.log(chatBot[newAnswer]);
  }
}

checkAnswer();
