import { removeCard, countLikeCard } from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

function getCardTemplate() {
  return cardTemplate.querySelector(".card").cloneNode(true);
}

export function createCard(
  cardName,
  cardLink,
  cardAlt,
  cardLikeCount,
  openImagePopup,
  authorID,
  userID,
  cardID,
  isLiked
) {
  const cardElement = getCardTemplate();
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".card__like-count");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardLink;
  cardImage.alt = cardAlt;
  cardTitle.textContent = cardName;
  likeCount.textContent = cardLikeCount;

  if (authorID === userID) {
    deleteButton.addEventListener("click", () =>
      deleteCard(cardElement, cardID)
    );
  } else {
    deleteButton.remove();
  }

  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () => {
    const isLikedNow = likeButton.classList.contains(
      "card__like-button_is-active"
    );
    toggleLike(cardElement, cardID, isLikedNow);
  });

  cardImage.addEventListener("click", openImagePopup);
  return cardElement;
}

function deleteCard(cardElement, cardID) {
  removeCard(cardID)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function toggleLike(cardElement, cardID, isLiked) {
  countLikeCard(cardID, isLiked)
    .then((cardData) => {
      const likeButton = cardElement.querySelector(".card__like-button");
      const likeCount = cardElement.querySelector(".card__like-count");

      likeCount.textContent = cardData.likes.length;

      if (isLiked) {
        likeButton.classList.remove("card__like-button_is-active");
      } else {
        likeButton.classList.add("card__like-button_is-active");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
