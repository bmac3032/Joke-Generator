// UI Elements
const jokeArea = document.getElementById("joke");

// Add event listener
document.querySelector(".btn-primary").addEventListener("click", function () {
  getJoke();
});

// Add event listener
document.querySelector(".btn-danger").addEventListener("click", function () {
  jokeArea.innerHTML = "";
});

// Get data from API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke").then((res) =>
    res.json().then((data) => displayJoke(data.setup, data.punchline))
  );
}

function displayJoke(setup, punchline) {
  jokeArea.innerHTML = ` <hr> ${setup} <br /> - ${punchline}`;
}
