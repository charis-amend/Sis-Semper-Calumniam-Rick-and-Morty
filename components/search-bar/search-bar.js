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

        // //switching icon from lupe to cancel
        // const iconCancelSource = 'assets/cancel-icon.png'
        // const iconLupeSource = 'assets/magnifying-glass.png'

        // searchIconImage.innerHTML = `
        // <img
        //       class="search-bar__icon"
        //       src="assets/cancel-icon.png"
        //       alt=""
        //       data-js="search-bar-icon"
        //     />`

        console.log(searchQuery)
        // fetching the current page and putting the searched input into the browser url which we want to fetch:
        fetchCharacters(currentPage, searchQuery);
    })

    // addvent listener for cancel button


    // searchBar.reset();

}



