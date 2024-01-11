import { fetchCharacters } from "../../index.js";

let currentPage = 1;
let searchQuery = "";


export function SearchingCharacters() {
    const searchBar = document.querySelector('[data-js="search-bar"]');
    const searchInput = document.querySelector('[data-js="searchbar-input"]')


    // submitting the input of the searchbar:
    searchBar.addEventListener("submit", (event) => {
        event.preventDefault();

        // updating the searchquery:
        searchQuery = searchInput.value;

        console.log(searchQuery)

        fetchCharacters(currentPage, searchQuery);
    })
}



