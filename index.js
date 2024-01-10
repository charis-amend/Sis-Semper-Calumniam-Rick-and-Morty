import { createCharacterCard } from "./components/card/card.js"

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// fetchCharacters function -- get the first 20 characters from the API
async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20")

    if (response.ok) {
      const characters = await response.json();
      console.log(characters)
      // emptying out cardContainer: 
      cardContainer.innerHTML = '';

      characters.forEach((character) => { createCharacterCard(character) });
    }

  } catch (error) {
    console.error("the API rickmorty is not fetching, see index.js fetchCharacters()", error)
  }
}
fetchCharacters();