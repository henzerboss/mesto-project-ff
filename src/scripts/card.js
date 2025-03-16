const cardTemplate = document.querySelector("#card-template").content;

function getCardTemplate() {
  return cardTemplate.querySelector(".card").cloneNode(true);
}

export function createCard(
  cardName,
  cardLink,
  cardAlt,
  cardLike,
  openImagePopup,
  deleteCard
) {
  const cardElement = getCardTemplate();
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardLink;
  cardImage.alt = cardAlt;
  cardTitle.textContent = cardName;

  likeButton.addEventListener("click", cardLike);
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  cardImage.addEventListener("click", openImagePopup);
  return cardElement;
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function toggleLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
