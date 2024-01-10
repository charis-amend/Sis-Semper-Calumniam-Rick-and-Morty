export function createCharacterCard(character) {
    const cardContainer = document.querySelector('[data-js="card-container"]')
    const card = document.createElement('li');
    card.classList.add('card')
    
    const imageOfCharacterUrl = character.image
    const nameOfCharacter = character.name
    const statusOfCharacter = character.status
    const typeOfCharacter = character.type
    const numberOfOccurencesOfOneCharacter = characters.episode.length

    card.innerHTML = `
    <div class="card__image-container">
      <img class="card__image" src="${character.image}" alt="image-of-${character.name}" />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${character.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${character.status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${character.type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${ numberOfOccurencesOfOneCharacter }</dd>
      </dl>
    </div>
  `;
  cardContainer.append(card)
  }
  