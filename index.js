// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
const writeCards = (names, event) => {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

const countDown = n => {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}

