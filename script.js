var alphabet = document.querySelector('.letters');
var destiny = document.querySelector('.destiny');
//var alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
//console.log(alphabet);
var cities = ["london", "melbourne", "paris", "dubai", "boston", "oklahoma", "detroit", "zagreb", "tokyo", "singapore"];
var i;
var lives = 5;
var correctLetter = 0;
var citiesLength = cities.length;
var randomIndex;
var randomCity;

for (var letter = 65; letter <= 90; letter++) {
  alphabet.innerHTML += '<a href="#" class="letter">' + String.fromCharCode(letter) + "</a>";
}
var letters = document.getElementsByClassName('letter');
console.log(letters);
// get random index
randomIndex = Math.floor(Math.random() * citiesLength);
// get random city
randomCity = cities[randomIndex];

randomCity = randomCity.replace(/[^a-zA-Z0-9]/g, "").toLocaleUpperCase();
console.log(randomCity);

for (var guessPlace = 0; guessPlace < randomCity.length; guessPlace++) {
  destiny.innerHTML += '<div class="spot">_</div>';
}

spots = document.getElementsByClassName('spot');
for (const letter of letters) {
  letter.addEventListener('click', () => {
    letter.classList.add("used");

    if (randomCity.includes(letter.innerHTML)) {
      for (var k = 0; k < randomCity.length; k++) {
        if (randomCity[k] == letter.innerHTML) {
          spots[k].innerHTML = letter.innerHTML;
          correctLetter++;
        }
      }
    }

    if (correctLetter < randomCity.length && !randomCity.includes(letter.innerHTML)) {
      lives--;

      if (lives == 0) {
        alert("You lost! Correct answer was " + randomCity);
        window.location.reload();
      }
    }

    if (correctLetter == randomCity.length) {
      setTimeout(() => {
        alert("You did not lost, you win actually. Nice, whatever!")
        window.location.reload();
      }, 1500);
    }

    document.querySelector('.lives').innerHTML = "You have " + lives + " lives remaining";
  });
}
