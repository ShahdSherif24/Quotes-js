const quotes = [
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "― Andre Gide, Autumn Leaves"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi"
  }
];

function getQuotes() {
  const num = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[num].quote;
  document.getElementById("author").innerHTML = quotes[num].author;
}
