export function SearchingCharacters() {
    const searchBar = document.querySelector('[data-js="search-bar"]');
    const searchInput = document.querySelector('[data-js="searchbar-input"]')
    const searchQuery = "";


    searchBar.addEventListener("submit", () => {
        searchQuery.text = `${searchInput}`;
    })
}



