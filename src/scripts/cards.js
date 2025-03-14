import { openModal } from "./modal.js";

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export function createCard(
  cardName,
  cardLink,
  cardAlt,
  cardLike,
  openImagePopup,
  deleteCard
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", cardLike);
  cardElement.addEventListener("click", openImagePopup);
  cardElement.querySelector(".card__image").src = cardLink;
  cardElement.querySelector(".card__image").alt = cardAlt;
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => deleteCard(cardElement));
  return cardElement;
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function cardLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export function openImagePopup(evt) {
  if (evt.target.classList.contains("card__image")) {
    const imageSrc = evt.target.src;
    const imageAlt = evt.target.alt;
    const popupImage = document.querySelector(".popup_type_image");
    const popupImageElement = popupImage.querySelector(".popup__image");
    const popupCaption = popupImage.querySelector(".popup__caption");
    popupImageElement.src = imageSrc;
    popupImageElement.alt = imageAlt;
    popupCaption.textContent = imageAlt;

    openModal(".popup_type_image");
  }
}
