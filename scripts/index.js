const placesList = document.querySelector(".places__list");

function createCard(cardName, cardLink, cardAlt, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = cardLink;
  cardElement.querySelector(".card__image").alt = cardAlt;
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => deleteCard(cardElement));
  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach((card) => {
  const cardName = card.name;
  const cardLink = card.link;
  const cardAlt = `Изображение места: ${cardName}`;
  placesList.append(createCard(cardName, cardLink, cardAlt, deleteCard));
});

