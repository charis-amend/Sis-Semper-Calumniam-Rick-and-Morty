import { fetchCharacters } from "../../index.js"
import { UpdatePagination } from "../nav-pagination/nav-pagination.js";

let currentPage = 1;
let searchQuery = "";

export function ButtonsClick() {
    // prevButton:
    const prevButton = document.querySelector('[data-js="button-prev"]');
    prevButton.addEventListener("click", () => {
        // if (3 > 1) currentPage is bigger than 1 it can always go to the previous
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters(currentPage, searchQuery);
            UpdatePagination(currentPage);
        }
        console.log(currentPage)
    })

    // nextButton
    const nextButton = document.querySelector('[data-js="button-next"]');
    nextButton.addEventListener("click", () => {
        const maxPage = 42;
        // if current page (6 < 42) is smaller than maxPage:
        if (currentPage < maxPage) {
            currentPage++;
            fetchCharacters(currentPage, searchQuery);
            UpdatePagination(currentPage);
        }
        console.log(currentPage)
    })

}



