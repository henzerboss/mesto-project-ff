import "../pages/index.css";
import {
  initialCards,
  createCard,
  cardLike,
  openImagePopup,
  deleteCard,
} from "./cards.js";
import { openModal, closeModal } from "./modal.js";

const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const allPopups = document.querySelectorAll(".popup");
const profileName = document.querySelector(".profile__title").textContent;
const profileDescription = document.querySelector(
  ".profile__description"
).textContent;
const formEditProfile = document.querySelector("form[name='edit-profile']");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const formNewPlace = document.querySelector("form[name='new-place']");
const cardName = formNewPlace.querySelector(".popup__input_type_card-name");
const cardURL = formNewPlace.querySelector(".popup__input_type_url");

initialCards.forEach((card) => {
  const cardName = card.name;
  const cardLink = card.link;
  const cardAlt = `Изображение места: ${cardName}`;
  placesList.append(
    createCard(
      cardName,
      cardLink,
      cardAlt,
      cardLike,
      openImagePopup,
      deleteCard
    )
  );
});

profileEditButton.addEventListener("click", () =>
  openModal(".popup_type_edit")
);
profileAddButton.addEventListener("click", () =>
  openModal(".popup_type_new-card")
);

allPopups.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () =>
    closeModal(`.${popup.classList[1]}`)
  );
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closeModal(`.${popup.classList[1]}`);
    }
  });
});

document.forms["edit-profile"].elements["name"].value = profileName;
document.forms["edit-profile"].elements["description"].value =
  profileDescription;

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closeModal(".popup_type_edit");
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
      cardLike,
      openImagePopup,
      deleteCard
    )
  );
  closeModal(".popup_type_new-card");
}

formNewPlace.addEventListener("submit", handleFormSubmitNewPlace);
