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
// const maxPage = 42;
let page = 1;
const searchQuery = "";

// fetchCharacters function -- get the first 20 characters from the API
async function fetchCharacters(page) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

    if (response.ok) {

      // getting everything from the api
      const dataApi = await response.json();
      console.log(dataApi)

      // getting maxPage = 42 from api
      const maxPage = dataApi.info.pages;

      // emptying out cardContainer: 
      cardContainer.innerHTML = '';

      const characters = dataApi.results;

      characters.forEach((character) => { createCharacterCard(character) });
    }

  } catch (error) {
    console.error("the API rickmorty is not fetching, see index.js fetchCharacters()", error)
  }
}
fetchCharacters(page);