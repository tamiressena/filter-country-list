import { countries } from "./countries.js";

let contentDiv = document.getElementById("content");
document.body.appendChild(contentDiv);

let subtitle = document.getElementById("subtitle");
subtitle.textContent = "Total number of countries: " + countries.length;
subtitle.style.color = "white";
subtitle.style.fontSize = "16px";
document.body.appendChild(contentDiv);

let countriesContainer = document.createElement("div");
countriesContainer.style.margin = "auto";
countriesContainer.style.marginTop = "450px";
countriesContainer.style.display = "flex";
countriesContainer.style.flexWrap = "wrap";
countriesContainer.style.justifyContent = "center";
countriesContainer.style.width = "80%";
document.body.appendChild(countriesContainer);

for (let i = 0; i < countries.length; i++) {
  let country = document.createElement("p");
  country.textContent = countries[i];
  country.className = "card";
  countriesContainer.appendChild(country);
}

// STARTING WORD
const counter = document.getElementById("counter");

// Filtra países pelas letras iniciais
function filterStartWithLetter() {
  const inputValue = input.value.toLowerCase();
  countriesContainer.innerHTML = "";

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(inputValue)
  );

  const countryCounter = filteredCountries.length;

  filteredCountries.forEach((country) => {
    let card = document.createElement("p");
    card.textContent = country;
    card.className = "card";
    countriesContainer.appendChild(card);
  });

  counter.textContent =
    "Countries starting with " + input.value + " are " + countryCounter;
}

// Inicia a função no input
const input = document.getElementById("searchbar");
input.addEventListener("input", filterStartWithLetter); // Filtra ao digitar

// Clicando no botão
const startingButton = document.getElementById("start-letter");
startingButton.addEventListener("click", filterStartWithLetter);
input.addEventListener("input", filterStartWithLetter);

// SEARCH WITH ANY WORD
const includesButton = document.getElementById("includes-letter");

includesButton.addEventListener("click", filterIncludesLetter);

// input.addEventListener("input", filterIncludesLetter);

// Filtra por letras que compõem o nome dos países
function filterIncludesLetter() {
  const inputValue = input.value.toLowerCase();
  countriesContainer.innerHTML = "";

  const filteredCountries = countries.filter((country) => {
    const validation = country.toLowerCase().includes(inputValue);
    if (validation == true) {
      return country;
    }
  });

  const countryCounter = filteredCountries.length;

  filteredCountries.forEach((country) => {
    let card = document.createElement("p");
    card.textContent = country;
    card.className = "card";
    countriesContainer.appendChild(card);
  });

  counter.textContent =
    "Countries containing " + input.value + " are " + countryCounter;
}
