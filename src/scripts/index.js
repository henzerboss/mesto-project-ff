import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, toggleLike } from "./card.js";
import { openModal, closeModal, closeByOverlayClick } from "./modal.js";
const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const allPopups = document.querySelectorAll(".popup");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formEditProfile = document.querySelector("form[name='edit-profile']");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const formNewPlace = document.querySelector("form[name='new-place']");
const cardName = formNewPlace.querySelector(".popup__input_type_card-name");
const cardURL = formNewPlace.querySelector(".popup__input_type_url");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupImageElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

initialCards.forEach((card) => {
  const cardName = card.name;
  const cardLink = card.link;
  const cardAlt = `Изображение места: ${cardName}`;
  placesList.append(
    createCard(
      cardName,
      cardLink,
      cardAlt,
      toggleLike,
      openImagePopup,
      deleteCard
    )
  );
});

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEditProfile);
});
profileAddButton.addEventListener("click", () => openModal(popupNewCard));

allPopups.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => closeModal(popup));
  popup.addEventListener("click", (evt) => closeByOverlayClick(evt, popup));
});

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closeModal(popupEditProfile);
}

formEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

function handleFormSubmitNewPlace(evt) {
  evt.preventDefault();
  const cardValue = cardName.value;
  const cardLink = cardURL.value;
  const cardAlt = `Изображение места: ${cardValue}`;

  placesList.prepend(
    createCard(
      cardValue,
      cardLink,
      cardAlt,
      toggleLike,
      openImagePopup,
      deleteCard
    )
  );
  closeModal(popupNewCard);
}

formNewPlace.addEventListener("submit", handleFormSubmitNewPlace);

function openImagePopup(evt) {
  if (evt.target.classList.contains("card__image")) {
    const imageSrc = evt.target.src;
    const imageAlt = evt.target.alt;

    popupImageElement.src = imageSrc;
    popupImageElement.alt = imageAlt;
    popupCaption.textContent = imageAlt;
    openModal(popupImage);
  }
}
