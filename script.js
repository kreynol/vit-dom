let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    const mainTitle = document.getElementById('main-title');
    console.log('this is the maintitle', mainTitle);
    mainTitle.innerText = "Dom Toretto's Homepage!"
  }
  shortenPageTitle();


  // Part 2
  function changeBodyBgColor() {
    var mainBody = document.querySelector('body');
    mainBody.style.backgroundColor = 'pink'
  }
  changeBodyBgColor();

  // Part 3
  function removeLastFavoriteThing() {
    var favs = document.getElementById('favorite-things');
    favs.lastElementChild.remove();
  }
  removeLastFavoriteThing();

  // Part 4
  function makeSpecialTitlesBigger() {
    var specialTitle = document.querySelectorAll('.special-title');
    specialTitle[0].style.fontSize = '2rem';
    specialTitle[1].style.fontSize = '2rem';
  }
  makeSpecialTitlesBigger();

  // Part 5
  function RemoveChicagoRace() {
    var pastRaces = document.getElementById('past-races');
    pastRaces.removeChild(pastRaces.childNodes[7]);  
  }
  RemoveChicagoRace();

  // Part 6
  function addPastRace() {
    var ul = document.getElementById("past-races");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("New York"));
    ul.appendChild(li);
  }
  addPastRace();

  // Part 7
  function createNewBlogPost() {

  }

});
