import { createCharacterCard } from "./components/card/card.js"
import { ButtonsClick } from "./components/nav-button/nav-button.js"
import { UpdatePagination } from "./components/nav-pagination/nav-pagination.js";
import { SearchingCharacters } from "./components/search-bar/search-bar.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchInput = document.querySelector('[data-js="searchbar-input"]')

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let currentPage = 1;
let searchQuery = "";
// const allPages =

// fetchCharacters function -- get the first 20 characters from the API
export async function fetchCharacters(page, searchquery) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchquery}`)

    if (response.ok) {

      // getting everything from the api
      const dataApi = await response.json();
      // console.log(dataApi)

      // emptying out cardContainer: 
      cardContainer.innerHTML = '';

      const characters = dataApi.results;
      characters.forEach((character) => { createCharacterCard(character) });
    }

    // if something goes wrong with the fetch url eg. wrong name:
    else {
      console.log("error, didnt find a character")
      cardContainer.innerHTML = `
      <p> We couldn't find the character, you are looking for.</p>
      `;
    }

  } catch (error) {
    console.error("the API rickmorty is not fetching, see index.js fetchCharacters()", error)
  }
}





fetchCharacters(currentPage, searchQuery);
ButtonsClick();
UpdatePagination(currentPage);
SearchingCharacters(searchQuery);




