import { fetchCharacters } from "../../index.js"

export function ButtonsClick() {
    let currentPage = 1;

    // prevButton:
    const prevButton = document.querySelector('[data-js="button-prev"]');
    prevButton.addEventListener("click", () => {
        // if (3 > 1) currentPage is bigger than 1 it can always go to the previous
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters(currentPage)
        }
    })

    // nextButton
    const nextButton = document.querySelector('[data-js="button-next"]');
    nextButton.addEventListener("click", () => {
        const maxPage = 42;
        // if current page (6 < 42) is smaller than maxPage:
        if (currentPage < maxPage) {
            currentPage++;
            fetchCharacters(currentPage);
        }
    })
}



ButtonsClick();

